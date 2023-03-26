
import React from 'react'
import Button from '../button/Button'

const UserNav = () => {
    return (
        <div className='flex justify-between  bg-green-500 text-white px-10 py-3'>
            <div className='flex items-center '>
                <h1>e-cart</h1>
            </div>
            <div className=' w-[15%] flex justify-between items-baseline '>
                <p>User Name</p>
                 
                 <Button className='bg-white text-green-500 w-[40%]'> 
                    Logout
                 </Button>
            </div>
        </div>
    )
}

export default UserNav