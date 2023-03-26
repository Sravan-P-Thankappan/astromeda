
import React from 'react'

const Card = () => {
    return (

        <div class="w-[65%]  rounded overflow-hidden shadow-lg">

            <img class="w-full" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
            </div>
            <div class="px-6 flex justify-center pt-4 pb-2 ">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View</span>
                
            </div>
        </div>
    )
}

export default Card