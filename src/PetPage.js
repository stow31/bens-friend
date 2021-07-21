import PetBio from './PetBio.js'
import PetHealth from './PetHealth.js'
import { PetContext } from './PetContext.js'
import { useContext } from 'react'
import dogImage from './assets/dog-v2.png'
import dogHouse from './assets/dog-house.png'
import './PetPage.css'
function PetPage(){

    const { 
        isAsleep
    } = useContext(PetContext)

    return(
        <div className="pet-page-container">
            <div className="pet-main-container">
                <div className="pet-bio-container">
                    <PetBio />
                </div>
                <div className="pet-container">
                    <div className="pet-img-bcg">
                        {isAsleep ?
                        <img className="pet-img" src={dogHouse} alt="" /> :
                        <img className="pet-img" src={dogImage} alt="" />   
                        }
                    </div>
                </div>
            </div>
            <div className="pet-aside-container">
                <PetHealth />
            </div>
        </div>
    )
}

export default PetPage