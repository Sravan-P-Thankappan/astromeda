import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import AdminNav from '../../components/navbar/AdminNav'

const Home = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('dashboard')
    },[])
  return (
    <>
    <AdminNav/>
    <Outlet/>
    </>
  )
}

export default Home