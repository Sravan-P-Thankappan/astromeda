import React from 'react'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <div className='px-10 py-3 bg-green-500 flex 
        justify-between text-white'>

            <div className=' w-[30%] flex justify-between items-center'>
                <Link to={'dashboard'}><h1>e-Kart</h1></Link> 
                 <Link to={'addproduct'}><p>Add Products</p></Link>
            </div>
            
            <div className='w-[30%] flex items-baseline justify-between px-10'>
                <h1>Admin</h1>
                 <Button className='w-[25%] bg-white text-green-500'>
                    Logout
                 </Button>

            </div>
        </div>
    )
}

export default AdminNav