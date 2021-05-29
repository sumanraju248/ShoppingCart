import React, {Component, useEffect, useState} from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import Quantity from './quantity';
import styles from '../styles/main.css';

const Active = (props) => {
    const { items } = props;
    const handleAdd = e => {
        props.handleAdd(e);
    }
    const handleRemove = e => {
        props.handleRemove(e);
    }

    const handleDelete = id => {
        props.handleDelete(id);
    };
    const handleSaveForLater = id => {
        props.handleSaveForLater(id);
    }
    return (
        items.map((v,k) => {
            const { name, quantity, active, id } = v;
            return active === true && (
                <div className="form-group" key={k}>
                    <Quantity 
                    name={name} 
                    quantity={quantity} 
                     handleAdd = {(e) => handleAdd(name)}
                     handleRemove = {(e) => handleRemove(name)} 
                     handleDelete = {(e) => handleDelete(id)}
                     handleSaveForLater = {(e) => handleSaveForLater(id)}
                      />
                </div>
            )
        })
    )
};

export default Active;