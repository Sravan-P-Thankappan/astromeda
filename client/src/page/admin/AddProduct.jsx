
import React from 'react'
import Button from '../../components/button/Button'
import FormContainer from '../../components/formContainer/FormContainer'
import Input from '../../components/input/Input'

const AddProduct = () => {
    return (

        <FormContainer className='h-[90vh]' title={'Add Product'}>

            <Input
                type='text'
                placeHolder='Product Name'
                name='name'
            />
            <Input
                type='number'
                placeHolder='Price'
                name='price'
            />
            <Input
                type='text'
                placeHolder='Brand'
                name='brand'
            />
            <Input
                type='text'
                placeHolder='Category'
                name='category'
            />
            <Input
                type='file'
                name='image'
            />

            <Button className='w-full text-white
                     bg-green-500'>
                Add
            </Button>
        </FormContainer>

    )
}

export default AddProduct