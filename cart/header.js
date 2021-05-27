import React, { Component, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import styles from '../styles/main.css'
const Header = (props) => {
    let activeCount = 0;
    let { active, setActive} = useState(100000);
    const handleActiveCount = () => {
       props.active.map((v,k)=>{
            if(v.active){
                activeCount++;
            }
        })
        return activeCount;
    }

    return (
        <header>
        <div className="row">
        <div className="col-md-10">
            <h1>Gap Shooping Bag</h1>
        </div>
        <div className="col-md-2">
            <button><span  className={styles.totalActiveItems}>{handleActiveCount()}</span>Items</button>
        </div>
    </div>

        </header>
    )
};

export default Header;