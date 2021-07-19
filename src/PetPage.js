import { PetContext } from './PetContext'
import { useContext } from 'react'
import PetBio from './PetBio.js'
import PetHealth from './PetHealth.js'
import dogImage from './assets/dog-v2.png'
import './PetPage.css'
function PetPage(){

    return(
        <div className="pet-page-container">
            <div className="pet-main-container">
                <div className="pet-container">
                    <img className="pet-img" src={dogImage} alt="" />
                </div>
                <div className="pet-bio-container">
                    <PetBio />
                </div>
            </div>
            <div className="pet-aside-container">
                <PetHealth />
            </div>
        </div>
    )
}

export default PetPage