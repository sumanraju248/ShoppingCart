import React, { Component, useEffect, useState} from 'react';
const Cart = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
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
      }, [])
    return (
        <div className="main">
            <div>
                <p>Active Items</p>
            </div>
            <div>
                <p>Save For Later Items</p>
            </div>
        </div>
    )
};

export default Cart;