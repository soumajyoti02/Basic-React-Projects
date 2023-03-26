import React, { useState } from 'react'

const DigitalClock = () => {
    let today = new Date().toLocaleTimeString()

    const [time, setTime] = useState(today)

    setInterval(() => {
        let today = new Date().toLocaleTimeString()
        setTime(today)
    }, 1000);

    return (
        <>
            <div className="DigitalClockOuterDiv flex w-screen h-screen">
                <div className="outer-Div h-screen w-screen flex justify-center items-center" >
                    <div className="inner-Div h-[40%] w-[40%] rounded-full flex  justify-center items-center p-8">
                        <p className="counter text-white text-8xl">{time}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalClock
