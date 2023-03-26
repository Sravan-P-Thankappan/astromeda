
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const UserNav = () => {

    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('user')
        setUserName(user)


    }, [])

    const logout = () => {
        
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <div className='flex justify-between  bg-green-500 text-white px-10 py-3'>
            <div className='flex items-center '>
                <h1 className='text-2xl font-bold'>e-cart</h1>
            </div>
            <div className=' w-[15%] flex justify-between items-baseline '>
                <p className='text-xl'>{userName}</p>

                <button
                    onClick={logout}
                    className='bg-white text-green-500 rounded px-4 py-1 '>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default UserNav