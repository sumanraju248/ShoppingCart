import React, { Component, useState} from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import styles from '../styles/main.css';
const Quantity = (props) => {
    return (
        <div className="col-md-10">
            <div className={styles.itemQuality}>
                <InputGroup>
                    <span className={styles.itemName}>{props.name}</span>
                    <InputGroup.Prepend>
                    <Button onClick={() => props.handleAdd()}>+</Button>
                    </InputGroup.Prepend>
                    <input type="text" className={styles.quantityStyle} value={props.quantity} readOnly/>
                    <InputGroup.Append>
                    <Button onClick={() => props.handleRemove()}>-</Button>
                    </InputGroup.Append>
                    <Button className={styles.deteleBtn} onClick={() => props.handleDelete()}>Delete</Button>
                    <Button className={styles.deteleBtn} onClick={() => props.handleSaveForLater()}>Save For Later</Button>
                </InputGroup>
            </div>  

        </div>
    )

};

export default Quantity;