import { PetContext } from './PetContext'
import { useContext, useState } from 'react'
import PetsLogo from './assets/logo-v2.png'
import './StartPage.css'

function StartPage(){

    const { setPetAge, setPetName, petType, setPetType } = useContext(PetContext)
    const [popUpVisable, setPopUpVisable] = useState("hide")

    const createPet = (e) =>{
        e.preventDefault()
        localStorage.setItem('petName', e.target.parentElement.previousSibling.value)
        setPetName( localStorage.getItem('petName') )

        localStorage.setItem('petAge', new Date().getDay)
        setPetAge( localStorage.getItem('petAge') )

        if (e.target.innerHTML === 'Create Dog'){

            localStorage.setItem('petType', 'dog')
            setPetType( localStorage.getItem('petType') )

        } else if (e.target.innerHTML === 'Create Cat'){

            localStorage.setItem('petType', 'cat')
            setPetType( localStorage.getItem('petType') )
            
        }

        // console.log("blah")
    }

    const handleInstructions = () =>{
        if (popUpVisable === "hide"){
            setPopUpVisable("")
        } else {
            setPopUpVisable("hide")
        }
    }

    return(
        <div>
            <div className="homepage-content-div">
                <img src={PetsLogo} alt="" />
                <p className="homepage-content-text">
                    Not allowed a real pet yet?
                </p>
                <p className="homepage-content-text">
                    Show your friends and family you're ready for the responsability to have a Bens' Friend by looking after your own virtual Bens' Friend
                </p>
                <form >
                    <input placeholder="Enter Your Pets Name" className="homepage-input" type="text" />
                    <div onClick={createPet}>
                        <button className="homepage-btn">Create Dog</button>
                        <button className="homepage-btn">Create Cat</button>
                    </div>
                </form>
                <button onClick={handleInstructions} className="instructions-btn">See Instructions</button>

            </div>
            <div className={`instruction-popup ${popUpVisable}`}>
                <div onClick={handleInstructions} className="exit-row">X</div>   
                <div>
                    <ol className="instruction-list">
                        <li>Enter Your Pet’s Name and click either create a Dog or Cat</li>
                        <li>Now you need to keep your Best Friend alive!</li>
                        <li>When each bar gets low you will need to either feed your pet, put them to bed, take them to the toilet or play with them.</li>
                        <li>If all progress bars get too low your pet will die.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default StartPage