import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/Button';
import { useContext, useEffect } from 'react'
import { PetContext } from './PetContext.js'
import LinearDeterminate from './LinearDeterminate.js'
import './PetHealth.css'

function PetHealth(){

    return(
        <div className="pet-health-div">


            <div className="hunger-div">
                <LinearDeterminate />
            </div>
            <div className="sleep-div">

            </div>
            <div className="potty-div">

            </div>
            <div className="play-div">

            </div>
        </div>
    )
}

export default PetHealth