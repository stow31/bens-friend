import PetBio from './PetBio.js'
import PetHealth from './PetHealth.js'
import { PetContext } from './PetContext.js'
import { useContext } from 'react'
import dogImage from './assets/dog-gif-no-background.gif'
import dogHouse from './assets/dog_house.gif'
import dogCollar from './assets/dog-collar.png'
import './PetPage.css'
function PetPage(){

    const { 
        isAsleep,
        isGameOver
    } = useContext(PetContext)

    return(
        <div className="pet-page-container">
            <div className="pet-main-container">
                <div className="pet-container">
                    <div className="pet-img-bcg">
                        {isAsleep ?
                        <img className="pet-img" src={dogHouse} alt="" /> 
                        : isGameOver ? 
                        <img className="pet-img" src={dogCollar} alt="" /> 
                        :<img className="pet-img" src={dogImage} alt="" />   
                        }
                    </div>
                </div>
            </div>
            <div className="pet-aside-container">
                <div className="pet-bio-container">
                    <PetBio />
                </div>
                <PetHealth />
            </div>
        </div>
    )
}

export default PetPage