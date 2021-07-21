import { PetContext } from './PetContext'
import { useContext } from 'react'
import PetsLogo from './assets/logo.png'
import './StartPage.css'

function StartPage(){

    const { setPetAge, setPetName } = useContext(PetContext)

    const createPet = (e) =>{
        e.preventDefault()
        localStorage.setItem('petName', e.target[0].value)
        setPetName( localStorage.getItem('petName') )

        localStorage.setItem('petAge', new Date().getDay)
        setPetAge( localStorage.getItem('petAge') )
    }

    return(
        <div className="homepage-content-div">
            <img src={PetsLogo} alt="" />
            <p className="homepage-content-text">
                Not allowed a real pet yet? <br/>Show your friends and family you're ready for the responsability to have a Bens' Friend by looking after your own virtual Bens' Friend
            </p>
            <form onSubmit={createPet}>
                <input placeholder="Enter Your Pets Name" className="homepage-input" type="text" />
                <button className="homepage-btn">Create My Bens' Friend</button>
            </form>
        </div>
    )
}

export default StartPage