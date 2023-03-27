import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-digital-clock';


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
            <div className="lightGreenTheme h-screen w-screen flex justify-center items-center" >
                <div className="innerCardLightBlueTheme h-[65%] w-[25%] rounded-3xl flex flex-col justify-between items-center p-8">
                    <p className="counter text-black text-[130px] h-[60%] flex justify-center items-center">{counter} </p>

                    <div className="flex space-x-3">

                        <Tooltip title="Add">
                            <Button
                                className='cardButtonIncrement'
                                onClick={handleCountingIncrement}>
                                <AddIcon style={{ fontSize: '100px' }} />
                            </Button>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <Button
                                className="cardButtonDecrement"
                                onClick={handleCountingDecrement}>
                                <DeleteIcon style={{ fontSize: '100px' }} />
                            </Button>
                        </Tooltip>


                        <Tooltip title="Reset" >
                            <Button
                                className=" cardButtonDecrement"
                                onClick={handleCountingReset}>
                                <RestartAltIcon style={{ fontSize: '100px' }} />
                            </Button>
                        </Tooltip>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ButtonClicker
