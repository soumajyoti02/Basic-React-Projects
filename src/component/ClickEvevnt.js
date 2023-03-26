import React, { useState } from 'react'

const ClickEvevnt = () => {
    const [background, setBackground] = useState('blue')
    const [buttonText, setButtonText] = useState('Click Me')
    const [count, setCount] = useState(0)
    const bgChange = () => {
        setCount(count + 1);
        if (count % 3 === 1) {
            setBackground('green')

        }
        else if (count % 3 === 2) {
            setBackground('yellow')
            setButtonText('Yeaahh!!')
        }
        else if (count % 3 === 0) {
            setBackground('blue')
            setButtonText('Click Me')
        }

    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundColor: `${background}` }}>
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={bgChange}>{buttonText}</button>

            </div>
        </>
    )
}

export default ClickEvevnt
