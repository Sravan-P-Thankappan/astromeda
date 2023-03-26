
import React from 'react'

const Button = ({children,className}) => {
    return (

        <button
            type="submit"
            className={` ${className} text-center py-3 rounded 
              focus:outline-none `}
        >     
              
          {children}

        </button>
    )
}

export default Button