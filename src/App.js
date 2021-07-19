import './App.css';
import StartPage from './StartPage.js'
import PetPage from './PetPage.js'
import { PetContext } from './PetContext.js'
import { useContext } from 'react'

function App() {

  const { petName } = useContext(PetContext)

  return (
    <div className="App">
      {localStorage.getItem('petName')
        ? <PetPage />
        : <StartPage />}
    </div>
  )


}

export default App;
