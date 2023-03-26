import React, { useState } from 'react'

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Link } from 'react-router-dom'
import FormContainer from '../../components/formContainer/FormContainer';
import axios from 'axios'


const Signup = () => {
    const [inputData, setInputData] = useState({})

    const handleInput = (data) => {

        setInputData((prev) => {
            return { ...prev, ...data }
        })
    }

    const handleSignup = (e) => {

        e.preventDefault()
        
        axios.post('http://localhost:5000/api/user/signup',inputData)

            .then((response) => {
                console.log(response)
            })
            .catch((er) => {

                console.log(er.response.data.message)
            })

    }


    return (

        <FormContainer className='min-h-screen' title={'Signup'}>
            <form onSubmit={handleSignup}>
                <Input
                    type='text'
                    placeHolder='Your Name'
                    name='name'
                    onChangeInput={handleInput}
                />
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

