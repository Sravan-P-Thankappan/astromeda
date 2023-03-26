
import React from 'react'

const Grid = ({ children }) => {
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-items-center gap-x-3 gap-y-5'>

            {children}

        </div>
    )
}

export default Grid