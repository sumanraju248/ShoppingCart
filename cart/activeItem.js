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

    const handleDelete = e => {
        props.handleDelete(e);
    };
    return (
        items.map((v,k) => {
            const { name, quantity, active, id } = v;
            console.log('Name and Quantity.....', name, quantity);
            return active === true ? (
                <div className="form-group" key={k}>
                    <Quantity name={name} quantity={quantity} 
                    handleAdd = {(e) => handleAdd(name)}
                     handleRemove = {(e) => handleRemove(name)} 
                     handleDelete = {(e) => handleDelete(id)}
                      />
                </div>
            ) : (
                <div className="form-group" key={k}>
                    <p>Save For Later Items</p>
                    <Quantity name={name} quantity={quantity} handleAdd = {(e) => handleAdd(e)} handleRemove = {(e) => handleRemove(name)} />
                  
                </div>
            )
        })
    )
};

export default Active;