import { useContext } from 'react'
import { PetContext } from './PetContext'
import './PetBio.css'

function PetBio(){

    const { petName, petAge } = useContext(PetContext)

    return(
        <div className='pet-bio-div'>
            <p><span className="pet-bio-label">Pet Name: </span>{petName}</p>
            {/* <p><span className="pet-bio-label">Pet Age: </span>{petAge}</p> */}
        </div>
    )
}

export default PetBio