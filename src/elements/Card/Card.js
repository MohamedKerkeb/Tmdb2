import React from 'react'
import Classes from './Card.module.css'

const Card = ({ name , img}) => {
    return(
        <div className={Classes.CardWrapper}>
            <div className={Classes.Card} 
            style={{background: `url(${img})`, backgroundSize: "cover", backgroundRepeat:"no-repeat"}}
            >
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Card