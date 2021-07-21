import { useContext, useState } from 'react'
import { PetContext } from './PetContext.js'
import LinearDeterminate from './LinearDeterminate.js'
import GameOver from './GameOver.js'
import FoodOptions from './FoodOptions.js'
import FunOptions from './FunOptions.js'
import './PetHealth.css'

function PetHealth(){

    const { 
        petName,
        isAsleep,
        setIsAsleep
    } = useContext(PetContext)

    const [hungerProgress, setHungerProgress] = useState(100)
    const [sleepProgress, setSleepProgress] = useState(100)
    const [bladderProgress, setBladderProgress] = useState(100)
    const [funProgress, setFunProgress] = useState(100)
    const [foodVisable, setFoodVisable] = useState("hide")
    const [sleepProgressRate, setSleepProgressRate] = useState(0.2)
    const [sleepBtnText, setSleepBtnText] = useState(`Put ${petName} to Bed`)
    const [funVisable, setFunVisable] = useState("hide")
    let isGameOver = false;     

    const handleHunger = () => {
        if (foodVisable === "hide"){
            setFoodVisable("")
        } else {
            setFoodVisable("hide")
        }
    }

    const handleFun = () => {
        if (funVisable === "hide"){
            setFunVisable("")
        } else {
            setFunVisable("hide")
        }
    }

    const handleSleep = () => {
        if (isAsleep){
            setSleepBtnText(`Put ${petName} to Bed`)
            setSleepProgressRate(0.2)
            setIsAsleep(false)
        } else {
            setSleepBtnText(`Wake ${petName} Up`)
            setSleepProgressRate(-0.2)
            setIsAsleep(true)
        }
    }

    const handleBladder = () => {
        setBladderProgress(100)
    }

    const checkForDeath = () => {
        if(hungerProgress < 0 && sleepProgress < 0 && bladderProgress < 0 && funProgress < 0){
            isGameOver = true
        }
    }

    checkForDeath()

    return(

        <div className="pet-health-div">
            { isGameOver ? <GameOver/> : 
            <div>
                <div className="hunger-div">
                    <p className="health-heading">Hunger</p>
                    <LinearDeterminate 
                        health="hunger" 
                        progressRate="0.3"
                        progress={hungerProgress}
                        setProgress={setHungerProgress} />
                    <button onClick={handleHunger} className="health-btn">Feed {petName}</button>
                </div>
                <div className="sleep-div">
                    <p className="health-heading">Sleep</p>
                    <LinearDeterminate 
                        health="sleep" 
                        progressRate={sleepProgressRate}
                        progress={sleepProgress}
                        setProgress={setSleepProgress} />
                    <button onClick={handleSleep} className="health-btn">{sleepBtnText}</button>
                </div>
                <div className="bladder-div">
                    <p className="health-heading">Potty</p>
                    <LinearDeterminate 
                        health="bladder" 
                        progressRate="0.7"
                        progress={bladderProgress}
                        setProgress={setBladderProgress} />
                    <button onClick={handleBladder} className="health-btn">Take {petName} to the bathroom</button>
                </div>
                <div className="fun-div">
                    <p className="health-heading">Play</p>
                    <LinearDeterminate 
                        health="fun" 
                        progressRate="0.1"
                        progress={funProgress}
                        setProgress={setFunProgress} />
                    <button onClick={handleFun} className="health-btn">Play with {petName}</button>
                </div>

                <div className="pop-up">
                    <FoodOptions 
                        classValue={foodVisable} 
                        handleHunger={handleHunger}
                        setHungerProgress={setHungerProgress}
                        hungerProgress={hungerProgress}
                        />
                    <FunOptions 
                        classValue={funVisable} 
                        handleFun={handleFun}
                        setFunProgress={setFunProgress}
                        funProgress={funProgress}
                        />
                </div>
            </div>
            }
        </div>
    )
}

export default PetHealth