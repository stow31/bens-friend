import { useContext } from 'react'
import { PetContext } from './PetContext.js'
import './GameOver.css'

function GameOver(){

    const handleRest = () =>{
        localStorage.clear();
        window.location.reload();
    }

    const { petName } = useContext(PetContext)

    return (
        <div className="game-over-container">
            <h1>GAME OVER</h1>
            <p>
                Oh no {petName} has gone 
                to heaven maybe you should stick 
                to house plants?
            </p>
            <button onClick={handleRest} className="new-game-btn">
                Or try your luck & start again
            </button>
        </div>
    )
}

export default GameOver