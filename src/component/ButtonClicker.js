import React, { useState } from 'react'

const ButtonClicker = () => {
    const [counter, setCounter] = useState(0)
    const handleCountingIncrement = () => {
        setCounter(counter + 1)
    }
    const handleCountingDecrement = () => {
        setCounter(counter - 1)
    }
    const handleCountingReset = () => {
        setCounter(0)
    }


    return (
        <>
            <div className="outer-Div h-screen w-screen flex justify-center items-center" >
                <div className="inner-Div h-[40%] w-[40%] rounded-full flex flex-col justify-between items-center p-8">
                    <p className="counter text-white text-7xl mt-10 font-serif">{counter}</p>

                    <div className="flex space-x-3">
                        <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleCountingIncrement}>Increment</button>


                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-28 h-10" onClick={handleCountingDecrement}>Decrement</button>

                        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleCountingReset}>Reset</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ButtonClicker
