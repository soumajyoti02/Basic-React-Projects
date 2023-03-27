import React, { useState } from 'react'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';

const Form = () => {
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
    })

    const handleOnChange = (event) => {

        const value = event.target.value
        const name = event.target.name

        setFullName((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    const onSubmit = (event) => {

        event.preventDefault()
    }

    return (
        <>
            <div className="DigitalClockOuterDiv w-screen h-screen flex justify-center items-center">
                <form className="h-2/4 w-[70%] border-dotted border-blue-900 flex flex-col items-center justify-center space-y-4" onSubmit={onSubmit}>

                    <div className='space-y-3'>
                        <h1 className="text-5xl text-white font-serif mb-5">Hello {fullName.firstName} {fullName.lastName}</h1>
                        <h4 className="text-3xl text-white font-serif mb-5 text-center">{fullName.email}</h4>
                        <h4 className="text-3xl text-white font-serif mb-5 text-center">{fullName.mobile}</h4>
                    </div>

                    <input name='firstName' type="text" placeholder='Enter Your Name' onChange={handleOnChange} className="w-full h-16 rounded-2xl outline-none p-2" />

                    <input name='lastName' type="password" placeholder='Enter Your Password' onChange={handleOnChange} className="w-full h-16 rounded-2xl outline-none p-2" />

                    <input name='email' type="email" placeholder='Enter Your Email' onChange={handleOnChange} className="w-full h-16 rounded-2xl outline-none p-2 " />

                    <input name='mobile' type="number" placeholder='Enter Your Mobile' onChange={handleOnChange} className="w-full h-16 rounded-2xl outline-none p-2" />

                    {/* <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:bg-slate-400" disabled={fullName.firstName === 0 ? true : false}>Submit</button> */}

                    <DriveFolderUploadRoundedIcon fontSize='large' style={{ fill: "white" }} />

                </form>
            </div>
        </>
    )
}

export default Form
