import React, { useState } from 'react'
import Proptypes from 'prop-types'


function AddCategory({setCategories}) {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = e =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if( inputValue && inputValue.trim().length >2){
            setCategories(prev => [inputValue, ...prev])
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}

export default AddCategory
