import frisbee from './assets/frisbee.png'
import tennisBall from './assets/tennis-ball.png'
import rope from './assets/rope.png'
import { PetContext } from './PetContext'
import { useContext } from 'react'
import './FunOptions.css'

function FunOptions(props){

    const { petName } = useContext(PetContext)

    const playFrisbee = () => {
        props.setFunProgress(props.funProgress+25)
        props.handleFun()
    }

    const playTennisBall = () => {
        props.setFunProgress(100)
        props.handleFun()
    }

    const playRope = () => {
        props.setFunProgress(props.funProgress+30)
        props.handleFun()
    }


    return(
        <div className={`fun-container ${props.classValue}`}>
            <div onClick={props.handleFun} className="exit-row">X</div>   
            <div className="fun-option-popup">
            <div className="fun-item">
                <img className="fun-img" src={frisbee} alt="" />
                <p>Frisbee</p>
                <p>+ 25</p>
                <button onClick={playFrisbee} className="fun-btn">Play with { petName }</button>

            </div>
            <div className="fun-item">
                <img className="fun-img" src={tennisBall} alt="" />
                <p>Tennis Ball</p>
                <p>Full Game</p>
                <button onClick={playTennisBall} className="fun-btn">Play with { petName }</button>

            </div>
            <div className="fun-item">
                <img className="fun-img" src={rope} alt="" />
                <p>Rope</p>
                <p>+ 30</p>
                <button onClick={playRope} className="fun-btn">Play with { petName }</button>

            </div>

        </div>
        </div>

    )
}

export default FunOptions;