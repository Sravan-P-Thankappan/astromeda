
import axios from 'axios';
import React, { useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Modal from '../modal/Modal';

const TableData = ({ product, no, onGetProduct,fetchProducts }) => {

    const [item, setItem] = useState({})
    // const [form, setForm] = useState(false)

    const [modal, setModal] = useState(false)


    const viewProduct = () => {
        axios.get('http://localhost:5000/api/product/product/' + product._id)
            .then((response) => {

                setItem(response.data)
                setModal(true)
            })
            .catch((er) => {
                console.log(er)
            })

    }


    const editProduct = () => {

        axios.get('http://localhost:5000/api/product/product/' + product._id)
            .then((response) => {

                onGetProduct(response.data)
            })
            .catch((er) => {
                console.log(er)
            })
    }


    const deleteProduct = ()=>{
        axios.delete('http://localhost:5000/api/product/product/'+product._id)
        .then(()=>{
            fetchProducts()
        })
        .catch((er)=>{

            console.log(er)
        })
    }



    return (

        <>
            <tbody>

                <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x">{no + 1}</td>
                    <td className="text-sm border-x text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                        <img width={50} src={`http://localhost:5000/api/images/${product.image}`} alt='items' />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                        {product.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                        {product.price}
                    </td>
                    <td
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x ">
                        <AiFillEye style={{ color: 'green', cursor: 'pointer' }} size={20}
                            onClick={viewProduct}
                        />

                    </td>
                    <td
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x ">
                        <AiFillEdit style={{ color: 'blue', cursor: 'pointer' }} size={20}
                            onClick={editProduct}
                        />

                    </td>
                    <td
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x ">
                        <AiFillDelete style={{ color: 'red', cursor: 'pointer' }} size={20}
                         
                         onClick= {deleteProduct}

                        />

                    </td>
                </tr>

            </tbody>






            {modal && <Modal
                item={item}
                setModal={setModal}
            />}

        </>
    )
}

export default TableData