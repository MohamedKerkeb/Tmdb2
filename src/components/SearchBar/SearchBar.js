import React from 'react'

import Classes from './SearchBar.module.css' 
import Input from '../../elements/Input/Input'
import Button from '../../elements/Button/Button'

const SearchBar = () => {
    return (
        <div className={Classes.SearchBarWrapper}>
            <Input type='search' id='search' name='search' placeholder='Your Search'/>
            <Button name='search' type='submit' set='Search' />
        </div>
    )
}

export default SearchBar
