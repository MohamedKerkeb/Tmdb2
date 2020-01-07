import React from 'react';

import Classes from './Button.module.css'

const Button = ({name, type, set}) => {
    return (
        <div>
            <button name={name} type={type}>
                {set}
            </button>
        </div>
    )
}

export default Button