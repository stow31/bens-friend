import React, {useState, createContext} from 'react'

export const PetContext = createContext()

export function PetProvider(props){

    const [petName, setPetName] = useState(localStorage.getItem('petName'))

    const [petAge, setPetAge] = useState(localStorage.getItem('petAge'))

    const [progress, setProgress] = useState(0);

    return <PetContext.Provider value={{
        setPetAge, 
        setPetName, 
        setProgress,
        petName, 
        petAge, 
        progress}}>
        {props.children}
    </PetContext.Provider>
}