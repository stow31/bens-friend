import pizzaIcon from './assets/pizza.png'
import iceCreamIcon from './assets/ice-cream.png'
import burger from './assets/burger.png'
import { PetContext } from './PetContext'
import { useContext } from 'react'
import './FoodOptions.css'

function FoodOptions(props){

    const { petName } = useContext(PetContext)

    const feedPizza = () => {
        props.setHungerProgress(props.hungerProgress+25)
        props.handleHunger()
    }

    const feedIceCream = () => {
        props.setHungerProgress(props.hungerProgress+10)
        props.handleHunger()
    }

    const feedBurger = () => {
        props.setHungerProgress(100)
        props.handleHunger()
    }


    return(
        <div className={`food-container ${props.classValue}`}>
            <div onClick={props.handleHunger} className="exit-row">X</div>   
            <div className="food-option-popup">
            <div className="food-item">
                <img className="food-img" src={pizzaIcon} alt="" />
                <p>Pizza Slice</p>
                <p>+ 10 Hunger</p>
                <button onClick={feedPizza} className="feed-btn">Feed {petName}</button>

            </div>
            <div className="food-item">
                <img className="food-img" src={iceCreamIcon} alt="" />
                <p>Ice Cream</p>
                <p>+ 5 Hunger</p>
                <button onClick={feedIceCream} className="feed-btn">Feed {petName}</button>

            </div>
            <div className="food-item">
                <img className="food-img" src={burger} alt="" />
                <p>Burger</p>
                <p>Full Meal</p>
                <button onClick={feedBurger} className="feed-btn">Feed {petName}</button>

            </div>

        </div>
        </div>

    )
}

export default FoodOptions;