import React, { useState } from 'react'

const Form = () => {
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
    })

    const handleOnChange = (event) => {
        /* a callback function that is triggered whenever the value of the input fields changes, receives an
         event object as a parameter */

        const value = event.target.value  // get the value of the input field that was changed
        const name = event.target.name    // get the name of the input field that was changed

        setFullName((preValue) => {
            /* call the setFullName function to update the fullName state object, passing in a callback 
            function that receives the previous state (preValue) as a parameter */

            if (name === "firstName") {  // if the changed input field was the first name field
                return {
                    firstName: value,  // update the firstName property with the new value
                    lastName: preValue.lastName,  // keep the lastName property the same as the previous state
                }
            }
            else if (name === "lastName") {  // if the changed input field was the last name field
                return {
                    firstName: preValue.firstName,  // keep the firstName property the same as the previous state
                    lastName: value  // update the lastName property with the new value
                }
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

                    <h1 className="text-5xl text-white font-serif mb-5">Hello {fullName.firstName} {fullName.lastName}</h1>
                    <input name='firstName' type="text" placeholder='Enter Your Name' onChange={handleOnChange} className="w-full h-16 rounded-2xl outline-none p-2" />

                    <input name='lastName' type="password" placeholder='Enter Your Password' onChange={handleOnChange} className="w-full h-16 rounded-2xl outline-none p-2" />

                    <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:bg-slate-400" disabled={fullName.firstName === 0 ? true : false}>Submit</button>

                </form>
            </div>
        </>
    )
}

export default Form
