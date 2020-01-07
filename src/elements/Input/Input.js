import React from 'react'

import Classes from './Input.module.css'

const Input = ({ text, id, name, placeholder}) => {
    return (
        <div className={Classes.InputWrapper}>
            <input type={text} id={id} name={name} placeholder={placeholder} />
        </div>
    )
}

export default Input