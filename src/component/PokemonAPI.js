import { parse } from 'postcss'
import React, { useEffect, useState } from 'react'

const PokemonAPI = () => {
    const [num, setNum] = useState(1)
    const [pokemon, setPokemon] = useState()
    const [moves, setMoves] = useState()


    useEffect(() => {
        const getData = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${num}`
            const data = await fetch(url)
            let parsedData = await data.json()
            console.log(data)
            setPokemon(parsedData.name)
            setMoves(parsedData.moves.length)
        }

        getData()
    }, [num])

    return (
        <>
            <div className="lightGreenTheme h-screen w-screen flex items-center">
                <div className="innerCardLightBlueTheme h-[400px] w-[1100px] ml-36 rounded-3xl space-y-9 flex flex-col justify-center pl-14">
                    <p className="text-5xl font-serif font-semibold">Pokemon Go : You Choose {pokemon}</p>
                    <p className="text-5xl font-black">You Have {moves} Moves</p>

                    <select value={num} onChange={(event) => {
                        setNum(event.target.value)
                    }} className='w-[40%] outline-dotted rounded-xl h-10 p-1'>

                        <option value="1">1</option>
                        <option value="25">25</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="6">6</option>

                    </select>
                </div>
            </div>
        </>
    )
}

export default PokemonAPI
