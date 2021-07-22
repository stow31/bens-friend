import React, {useState, createContext} from 'react'

export const PetContext = createContext()

export function PetProvider(props){

    const [petName, setPetName] = useState(localStorage.getItem('petName'))

    const [petAge, setPetAge] = useState(localStorage.getItem('petAge'))

    const [isAsleep, setIsAsleep] = useState(false)

    const [isGameOver, setIsGameOver] = useState(false)

    const [petType, setPetType] = useState()

    return <PetContext.Provider value={{
        setPetAge, 
        setPetName, 
        isAsleep,
        petName, 
        petAge,
        setIsAsleep,
        isGameOver,
        setIsGameOver, 
        petType, 
        setPetType
        }}>
        {props.children}
    </PetContext.Provider>
}


