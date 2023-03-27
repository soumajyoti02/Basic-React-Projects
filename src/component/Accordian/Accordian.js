import React, { useState } from 'react'
import { questions } from './Api';
import './Accordian.css'
import MyAccordion from './MyAccordion';

const Accordian = () => {
    const [data, setData] = useState(questions)

    return (
        <>
            <div className='main-container-Accordian relative overflow-auto'>

                <div className="inner-container-Accordian p-5 mt-4 rounded-3xl space-y-3 absolute top-10 mb-6">
                    <h1 className='text-center font-serif text-2xl font-semibold'>React Interview Questions</h1>
                    {data.map((curElem) => {
                        const { id } = curElem
                        return <MyAccordion key={id} {...curElem} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Accordian
