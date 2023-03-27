import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

const Todo = () => {

    const [input, setInput] = useState('')
    const [task, setTask] = useState([])
    const [line, setLine] = useState([])

    const handleOnChange = (event) => {
        setInput(event.target.value)
    }
    const handleDelete = (index) => {
        const newLine = [...line]
        newLine[index] = !newLine[index]
        setLine(newLine)
    }

    const handleAddTask = () => {
        setTask([...task, input])
        setLine([...line, false])
        setInput('')
    }

    const handleFormat = () => {
        setTask([])
        setLine([])
        setInput([])
    }

    return (
        <>
            <div className="lightGreenTheme h-screen w-screen flex justify-center items-center">
                <div className="innerDivPosition space-y-3">
                    <h1 className="text-6xl font-mono font-semibold">ToDo List</h1>

                    <div className=" space-x-1 w-[90%] m-auto">
                        <input type="text" value={input} placeholder='Enter Your Task' className='outline-none  bg-transparent placeholder:text-slate-700 placeholder:text-lg placeholder:font-semibold h-10 border-b-2 border-b-violet-500 text-center' onChange={handleOnChange} />

                        <Button className="newBtn" onClick={handleAddTask} disabled={input.length === 0}>
                            <AddIcon fontSize='large' />
                        </Button>
                        <Button className="newBtnTask" onClick={handleFormat} disabled={task.length === 0}>
                            <DoNotDisturbAltIcon fontSize='large' />
                        </Button>

                    </div>

                    <ol className='h-[60%] w-[90%] m-auto overflow-auto space-y-3'>

                        {task.map((works, index) => {
                            return (
                                <li className='space-x-5' key={index}>
                                    <Button className="newBtnTask" onClick={() => handleDelete(index)}>
                                        <DeleteIcon fontSize='large' />
                                    </Button>
                                    <span style={{ textDecoration: line[index] ? "line-through" : "none" }}>{works}</span>
                                </li>)
                        })}

                    </ol>

                </div>
            </div>
        </>
    )
}

export default Todo
