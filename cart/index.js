import React, { Component, useEffect, useState} from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import styles from '../styles/main.css';
import Header from './header';
import Active from './activeItem';
import e from 'cors';
import Quantity from './quantity';

const Cart = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    const [active, setActive] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/items")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);

    const handleAddQuantity = (e) => {
        // Set the New Quantity for that Item
        const newList = items.filter((item) => {
            item.quantity += 1;
            setCount(count + 1);
            return item;
        });
        setItems(newList);
    }

    const handleRemoveQuantity = () => {
        if(count !== 0) {
            setCount( count - 1);
        }
    };

    const handleAdd = (e) => {
        // increase item quantity and update the state with new quantity
        const newItems = items.filter((item)=>{
            if( e === item.name) {
                item.quantity +=1;
            }
        });
        setItems(((newItems)=>newItems));
        setCount(count+1);
    }

    const handleRemove = (e) => {
        const updatedItems= items.filter((item) => {
            if(e.toString() === item.name.toString()) {
                item.quantity -= 1;
            }
        });
        setItems((updatedItems)=>updatedItems);
        setCount(count - 1);
    };

    const handleDelete = e => {
        const newList = items.filter((item) => item.id !== e);
        setItems(newList);
    };

    const handleSaveForLater = id => {
        let newList = [];
        items.filter(item => {
            if(id === item.id) {
                item.active = false;
            }
            newList.push(item);
        });
        setItems(newList);
    };

    const handleMoveToActive = id => {
        let newList = [];
        items.filter((item) => {
            if(id === item.id) {
                item.active = true;
            }
            newList.push(item);
        });
        setItems(newList)
    };
    const handleItems = (items) => {
        return (
            <Active 
            items={items} 
            handleAdd={(e) =>handleAdd(e)} 
            handleRemove = {(e) => handleRemove(e)} 
            handleDelete = {(e) => handleDelete(e)}
            handleSaveForLater ={(e) => handleSaveForLater(e)}
            />
        )
    }

    const handleSaveForLaterItems = items => {
        return (
                items.map((item, key) => {
                    if(item.active === false) {
                        return (
                        <div className="col-md-10" key={key}>
                            <div className={styles.itemQuality}>
                                <InputGroup>
                                    <span className={styles.itemName}>{item.name}</span>
                                    <Button className={styles.deteleBtn} onClick={(e) => handleDelete(e)}>Delete</Button>
                                    <Button className={styles.deteleBtn} onClick={(e) => handleMoveToActive(item.id)}>Move To Active</Button>
                                </InputGroup>
                            </div>  
                
                        </div>
                        )
                    }
                })
        )
    }

    return (
        <div className={styles.main}>
            <Header active={items} />
            <div className={styles.formItems}>
                <p>Active Items</p>
                {handleItems(items)}
            </div>
            <div className={styles.formItems}>
                <p>Save For Later Items </p>
                {handleSaveForLaterItems(items)}
            </div>
        </div>
    )
};

export default Cart;