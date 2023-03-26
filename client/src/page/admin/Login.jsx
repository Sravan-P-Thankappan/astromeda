
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button/Button";
import FormContainer from '../../components/formContainer/FormContainer';
import Input from "../../components/input/Input";

const Login = () => {

    const navigate = useNavigate()
    const [inputData, setInputData] = useState({})

    const handleInput = (data) => {

        setInputData((prev) => {

            return { ...prev, ...data }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/api/admin/login', inputData)
            .then((res) => {

                navigate('/admin/home')
            })
            .catch((er) => {
                console.log(er.response.data.message)
            })
    }

    return (
        <FormContainer className='min-h-screen' title={'Admin Login'}>
            <form onSubmit={handleLogin}>
                <Input
                    type='email'
                    placeHolder='Your Email'
                    name='email'
                    onChangeInput={handleInput}

                />
                <Input
                    type='password'
                    placeHolder='Password'
                    name='password'
                    onChangeInput={handleInput}

                />

                <Button className='w-full text-white
                     bg-green-500'>
                    Login
                </Button>
            </form>
        </FormContainer>
    )
}

export default Login