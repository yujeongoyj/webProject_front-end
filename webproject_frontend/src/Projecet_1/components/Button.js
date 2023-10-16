import { useLinkClickHandler } from 'react-router-dom';
import './Button.css';
import React, {useState} from 'react';
import AddProduct from '../pages/AddProduct';


const Button = (props) => {
    const{} =  useState;
    const ClickHandler = () => {
        console.log('판매해');
    }

    return (
      
            <button onClick={ClickHandler}>상품등록</button>
    )
}

export default Button;