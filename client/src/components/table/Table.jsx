
import React from 'react'
import TableData from './TableData'
import TableHead from './TableHead'

const Table = ({ products,onGetProduct,fetchProducts }) => {
    return (

        <div className='w-full bg-white shadow-lg mt-10 mx-auto'>


            <table className=" w-full
              border border-gray-300">

                <TableHead />

                {
                    products.map((product,i) => {
                        return (
                            <TableData
                            fetchProducts={fetchProducts}
                            product={product}
                            onGetProduct={onGetProduct}
                            no={i}
                            />
                        )
                    })
                }




            </table>
        </div>
    )
}

export default Table