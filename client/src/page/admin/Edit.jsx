import axios from 'axios'
import React, { useState } from 'react'
import Button from '../../components/button/Button'
import FormContainer from '../../components/formContainer/FormContainer'
import Input from '../../components/input/Input'

const Edit = ({ item, setForm }) => {


    const [inputData, setInputData] = useState({ ...item })

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

    const handleEditProduct = (e) => {

        e.preventDefault()

        const formData = new FormData()


        for (const key in inputData) {

            console.log(key, inputData[key])

            formData.append(key, inputData[key])
        }

        formData.append('image', file)


        axios.post('http://localhost:5000/api/product/updateproduct/' + item._id, formData)
            .then(() => {
                setForm(false)
            })
            .catch((er) => {
                console.log(er.response.data.message)
            })

    }


    console.log(file)




    return (

        <FormContainer className='h-[70vh]' title={'Edit Product'}>

            <form onSubmit={handleEditProduct} encType='multipart/form-data' >
                <Input
                    type='text'
                    placeHolder='Product Name'
                    name='name'
                    defaultValue={item.name}
                    onChangeInput={handleInput}
                />
                <Input
                    type='number'
                    placeHolder='Price'
                    name='price'
                    defaultValue={item.price}
                    onChangeInput={handleInput}

                />
                <Input
                    type='text'
                    placeHolder='Brand'
                    name='brand'
                    defaultValue={item.brand}
                    onChangeInput={handleInput}

                />
                <Input
                    type='text'
                    placeHolder='Category'
                    name='category'
                    defaultValue={item.category}
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

export default Edit