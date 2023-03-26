
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import FormContainer from '../../components/formContainer/FormContainer'
import Input from '../../components/input/Input'

const AddProduct = () => {
   
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({})
    const [file, setFile] = useState()
    const handleInput = (data) => {

        setInputData((prev) => {
            return { ...prev, ...data }
        })
    }

    const handleFile = (e)=>{
            
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }  

    const handleAddProduct = (e) => {

        e.preventDefault()

        const formData = new FormData()

        for (const key in inputData) {

            formData.append(key, inputData[key])
        }

        formData.append('image', file)

      

        axios.post('http://localhost:5000/api/product/product', formData)
            .then((res) => {
                 navigate('/admin/home/dashboard')
            })
            .catch((er) => {

                console.log(er.response.data.message)
            })
            

    }

    return (

        <FormContainer className='h-[90vh]' title={'Add Product'}>

            <form onSubmit={handleAddProduct} encType='multipart/form-data' >
                <Input
                    type='text'
                    placeHolder='Product Name'
                    name='name'
                    onChangeInput={handleInput}
                />
                <Input
                    type='number'
                    placeHolder='Price'
                    name='price'
                    onChangeInput={handleInput}

                />
                <Input
                    type='text'
                    placeHolder='Brand'
                    name='brand'
                    onChangeInput={handleInput}

                />
                <Input
                    type='text'
                    placeHolder='Category'
                    name='category'
                    onChangeInput={handleInput}

                />

                <input
                    type='file'
                    className="block border border-grey-light w-full p-3 rounded mb-4"                   
                    onChange={handleFile}
                />

                <Button className='w-full text-white
                     bg-green-500'>
                    Add
                </Button>
            </form>
        </FormContainer>

    )
}

export default AddProduct