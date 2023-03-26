
import axios from 'axios'
import React, { useState } from 'react'
import Modal from '../../components/modal/Modal'


const Card = ({ product }) => {

    const [item, setItem] = useState({})
    const [modal, setModal] = useState(false)


    const getDetails = () => {
        axios.get('http://localhost:5000/api/product/product/' + product._id)
            .then((response) => {

                setItem(response.data)
                setModal(true)
            })
            .catch((er) => {
                console.log(er)
            })
    }




    return (


        <>



            <div class="w-[50%]  rounded overflow-hidden shadow-lg">

                <img class="w-full" src={`http://localhost:5000/api/images/${product.image}`}
                    alt="Sunset in the mountains" />

                <div class="px-6 py-4 flex flex-col items-center">
                    <div class="font-bold text-xl mb-2">{product.name}</div>
                    <p class="text-gray-700 text-base">
                       <span>&#8377;</span>{product.price}
                    </p>
                </div>

                <div class="px-6 flex justify-center pt-2 pb-2 ">

                    <button className='w-[80%] bg-green-500 
                text-white 
                rounded py-2'
                        onClick={getDetails}
                    >
                        View
                    </button>

                </div>
            </div>

            {modal &&<Modal
            item={item}
            setModal={setModal}
            />}

        </>
    )
}

export default Card