import React from 'react'

import Classes from './Title.module.css'

const Title = ({ title }) => {
    return (
        <div>
            <h3 className={Classes.Title}>{title}</h3>
        </div>
    )
}

export default Title