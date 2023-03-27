import React, { useState } from 'react'

const MyAccordion = ({ question, answer }) => {

    const [show, setShow] = useState(false)
    const [icon, setIcon] = useState('➕')

    return (
        <>
            <div className="w-11/12 h-10 m-auto bg-yellow-300 flex items-center space-x-4 p-2 rounded-2xl">
                <button onClick={() => setShow(!show)}>{show ? '➖' : '➕'}</button>
                <h3>{question}</h3>

            </div>
            <p hidden={!show} style={{ transition: "0.5s" }} className='w-11/12 m-auto p-2 font-mono'>{answer}</p>
        </>
    )
}

export default MyAccordion
