
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import FormContainer from '../../components/formContainer/FormContainer'
import Input from '../../components/input/Input'

const AddProduct = () => {

    const navigate = useNavigate()
    const [inputData, setInputData] = useState({})
    const [formEr, serFormEr] = useState({})

    const [file, setFile] = useState()

    const handleInput = (data) => {

        setInputData((prev) => {
            return { ...prev, ...data }
        })
    }

    const handleFile = (e) => {

        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }


    const validation = (data, file) => {
        let err = {}

        if (data.name === undefined) err.name = "Name Is Required"
        if (data.brand === undefined) err.brand = "Brand Is Required"
        if (data.price === undefined) err.price = "Price Is Required"
        if (data.category === undefined) err.category = "Category Is Required"
        if (file === undefined) err.file = "Image Is Required"

        return err


    }

    const handleAddProduct = (e) => {

        e.preventDefault()


        let res = validation(inputData, file)

        serFormEr(res)
        if (Object.keys(res).length === 0) {
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

        return;

    }

    return (

        <FormContainer className='h-[90vh]' title={'Add Product'}>

            <form onSubmit={handleAddProduct} encType='multipart/form-data' >
                <label className='text-red-500 text-sm' htmlFor="">{formEr.name}</label>

                <Input
                    type='text'
                    placeHolder='Product Name'
                    name='name'
                    onChangeInput={handleInput}
                />
                <label className='text-red-500 text-sm' htmlFor="">{formEr.price}</label>

                <Input
                    type='number'
                    placeHolder='Price'
                    name='price'
                    onChangeInput={handleInput}

                />
                <label className='text-red-500 text-sm' htmlFor="">{formEr.brand}</label>

                <Input
                    type='text'
                    placeHolder='Brand'
                    name='brand'
                    onChangeInput={handleInput}

                />
                <label className='text-red-500 text-sm' htmlFor="">{formEr.category}</label>

                <Input
                    type='text'
                    placeHolder='Category'
                    name='category'
                    onChangeInput={handleInput}

                />
                <label className='text-red-500 text-sm' htmlFor="">{formEr.file}</label>

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