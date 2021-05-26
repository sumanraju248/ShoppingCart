import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart/index'
export default class HelloWorld extends Component {

    render(){
        return (
            <div>
                <h1>Gap Shopping Bag</h1>
                <Cart/>
            </div>
        )
    }

};

const dom = document.getElementById('reactapp');

ReactDOM.render(<HelloWorld/>, dom);





