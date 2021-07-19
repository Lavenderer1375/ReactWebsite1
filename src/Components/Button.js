import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


const STYLES = ['btm--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--larg'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/news' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
        </Link>
    )
     
    };
