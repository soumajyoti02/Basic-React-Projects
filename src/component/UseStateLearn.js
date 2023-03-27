import React, { useEffect, useState } from 'react';

const UseStateLearn = () => {
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log("Clicked")
        document.title = `You Clicked Me ${num} times`
    }, [num])

    return (
        <>
            <button onClick={() => setNum(num + 1)}>
                Click Me {num}
            </button>
        </>
    )
}

export default UseStateLearn;