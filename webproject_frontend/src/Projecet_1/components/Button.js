import { useLinkClickHandler } from 'react-router-dom';
import './Button.css';

const Button = () => {
    const ClickHandler = () => {
        console.log('판매해');
    }

    return (
      
            <button onClick={ClickHandler}>판매하기</button>
    )
}

export default Button;