import React, { useState } from 'react'
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Link, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/formContainer/FormContainer';
import axios from 'axios';

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

        axios.post('http://localhost:5000/api/user/login',inputData)
            .then((res) => {
           
               navigate('/home')
            })
            .catch((er) => {
                console.log(er.response.data.message)
            })

 
    }

    return (

        <FormContainer className='min-h-screen' title={'Login'}>
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
            <div className="text-grey-dark mt-6 flex justify-center">
                Already have an account?
                <Link to={'/signup'} className="no-underline border-b border-blue text-blue" >
                    Signup
                </Link>.
            </div>

        </FormContainer>

    )
}

export default Login