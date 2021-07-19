import { PetContext } from './PetContext'
import { useContext } from 'react'
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
        <div>
            <h1>Bens' Friend</h1>
            <p>
                Not allowed a real pet yet? Show your friends and family you're ready for the responsability to have a Bens' Friend by looking after your own virtual Bens' Friend
            </p>
            <form onSubmit={createPet}>
                <input type="text" />
                <button>Create My Bens' Friend</button>
            </form>
        </div>
    )
}

export default StartPage