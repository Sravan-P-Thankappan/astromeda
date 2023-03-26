
import React from 'react'

const Input = (props) => {
    
    const handleInput = (e)=>{
        
        const data = {[e.target.name]:e.target.value}

        props.onChangeInput(data)
    }
    return (
        <input
            type={props.type}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name={props.name}
            placeholder={props.placeHolder}
            onChange={handleInput}        
            defaultValue={props.defaultValue}
            />
    )
}

export default Input