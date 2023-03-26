
import React from 'react'

const Modal = (props) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-6/12 my-6 mx-auto max-w-3xl">

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold text-center">
                                Details
                            </h3>
                            <button
                                className=" ml-auto bg-red-500 border-0 text-slate-200  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"

                            >
                                <span
                                    onClick={() => props.setModal(false)}
                                    className=" text-slate-200  mb-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="relative w-full flex  p-6">

                            <div className='flex-1 '>
                                <img className='object-cover'

                                    src={`http://localhost:5000/api/images/${props.item.image}`}

                                    alt="" />
                            </div>
                            <div className='flex-1 bg-slate-200-300 flex flex-col gap-y-7 p-5'>
                                <p>Name  : <span>{props.item.name}</span></p>
                                <p>Brand  : <span>{props.item.brand}</span></p>
                                <p>Price  : <span>{props.item.price}</span></p>
                                <p>Category  : <span>{props.item.category}</span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal