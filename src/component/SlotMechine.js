import React, { useState, useEffect } from 'react'

const SlotMechine = () => {
    const [emojiDisplay, setEmojiDisplay] = useState(['*', '*', '*'])
    const [winning, setWinning] = useState('Start The Game')

    const handleClick = () => {

        let emojiArray = ['🤣', '😊', '😂', '❤️']
        let newEmojiDisplay = []
        setEmojiDisplay([])
        setWinning('')

        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * 4);
            console.log(index)
            newEmojiDisplay.push(emojiArray[index])
        }
        setEmojiDisplay(newEmojiDisplay)
        if (new Set(newEmojiDisplay).size === 1) {
            setWinning('Congratulation! You Won!!');
        } else {
            setWinning('Sorry, You Loose!');
        }
    }

    return (
        <>
            <div className="h-screen w-screen" style={{
                backgroundColor: '#000000',
                backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)'
            }}>
                <h1 className='w-11/12 mx-auto text-4xl text-center  p-10 text-gray-300 font-bold'> Welcome to Slot Mechine Game </h1>

                <div className="h-[80vh] w-screen flex justify-center items-center">
                    <div className="h-[400px] w-[400px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900 space-y-6 flex justify-center items-center flex-col">

                        <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{emojiDisplay.join('')}</h5>
                        <p className="font-serif text-4xl text-gray-700 dark:text-gray-400 text-center">{winning}</p>
                        <button type="button" onClick={handleClick} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-[120px]">Click Me</button>
                    </div>
                </div>

            </div>


        </>
    )
}

export default SlotMechine
