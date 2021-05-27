import React, { Component, useEffect, useState} from 'react';
import styles from '../styles/main.css';
import Header from './header';
import Active from './activeItem';

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
            console.log('...........Item', item);
            item.quantity += 1;
            setCount(count + 1);
            return item;
        });
        console.log('New List......', newList);
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
            console.log('Updated Item....', item)
        });
        console.log('........New Items', newItems)
    }

    const handleRemove = (e) => {
        const newItems = items.filter((item) => {
            if(e === item.name) {
                item.quantity -= 1;
            }
        });
        setItems(newItems);
    };

    const handleDelete = e => {
        console.log('....This Item should Remove', e);
        const newList = items.filter((item) => item.id !== e);
        console.log('.......Deleted List....', newList)
        setItems((newList)=>newList);
    };
    const handleItems = (items) => {
        return (
            <Active 
            items={items} 
            handleAdd={(e) =>handleAdd(e)} 
            handleRemove = {(e) => handleRemove(e)} 
            handleDelete = {(e) => handleDelete(e)}
            />
        )
    }

    return (
        <div className={styles.main}>
            <Header active={items} />
            <div className={styles.formItems}>
                <p>Active Items</p>
                {handleItems(items)}
            </div>
        </div>
    )
};

export default Cart;