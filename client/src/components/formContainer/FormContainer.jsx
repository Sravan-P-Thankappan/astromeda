
import React from 'react'

const FormContainer = ({children,title, className}) => {
    return (
        <div className={`${className} bg-grey-lighter  flex flex-col`}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
                <h1 className="mb-8 text-3xl text-center">{title}</h1>
                    
                    {children}

                </div>
            </div>
        </div>
    )
}

export default FormContainer