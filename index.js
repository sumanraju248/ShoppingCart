import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart/index'
export default class ShoopingCart extends Component {

    render(){
        return (
            <Cart/>
        )
    }

};

const dom = document.getElementById('reactapp');

ReactDOM.render(<ShoopingCart/>, dom);





