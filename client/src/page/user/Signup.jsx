import React, { useState } from 'react'

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Link, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/formContainer/FormContainer';
import axios from 'axios'


const Signup = () => {
    const [inputData, setInputData] = useState({})
    const [formEr, setFormEr] = useState({})
    const navigate = useNavigate()
    const validation = (data) => {

        let err = {}

        if (data.name === undefined) err.name = "Name Is Required"
        if (data.email === undefined || !data.email.includes('@')) err.email = "Invalid Email"
        if (data.password === undefined || data.password.trim().length < 3) err.password = "Password Is Not Strong"

        return err
    }

    const handleInput = (data) => {

        setInputData((prev) => {
            return { ...prev, ...data }
        })
    }



    const handleSignup = (e) => {

        e.preventDefault()

        const result = validation(inputData)
        setFormEr(result)

        if (Object.keys(result).length === 0) {

            axios.post('http://localhost:5000/api/user/signup', inputData)

                .then((response) => {
                    navigate('/')
                })
                .catch((er) => {

                    console.log(er.response.data.message)
                })
        }

        return;

    }


    return (

        <FormContainer className='min-h-screen' title={'Signup'}>
            <form onSubmit={handleSignup}>
                <label className='text-red-500 text-sm' htmlFor="">{formEr.name}</label>

                <Input
                    type='text'
                    placeHolder='Your Name'
                    name='name'
                    onChangeInput={handleInput}
                />
                <label className='text-red-500 text-sm' htmlFor="">{formEr.email}</label>

                <Input
                    type='email'
                    placeHolder='Your Email'
                    name='email'
                    onChangeInput={handleInput}

                />
                <label className='text-red-500 text-sm' htmlFor="">{formEr.password}</label>

                <Input
                    type='password'
                    placeHolder='Password'
                    name='password'
                    onChangeInput={handleInput}

                />


                <Button className='w-full text-white
                     bg-green-500'>

                    Create Account
                </Button>
            </form>
            <div className="text-grey-dark mt-6 flex justify-center">
                Already have an account?
                <Link to={'/'} className="no-underline border-b border-blue text-blue" >
                    Log in
                </Link>.
            </div>
        </FormContainer>


    )
}

export default Signup

