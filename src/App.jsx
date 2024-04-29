import './App.css'
import Planets from './Components/Planets'
import planetsList from './Components/PlanetsList'
import Flèche from '../src/assets/Flèche.png'
import {useState} from 'react'
import hello from './Components/HelloPlanets'



function App() {
  const [planetsIndex, setplanetsIndex] = useState(0);

  const handlePrevious = () => {
    setplanetsIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Fonction pour gérer le clic sur le bouton suivant
  const handleNext = () => {
    setplanetsIndex(prevIndex => (prevIndex < planetsList.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <>
      <div>
      <h1 className='h1'>Planets of 
        the <span className='span'>solar</span> system</h1>
        <Planets index={planetsIndex}
        />
        <div className='btns'>
        <button onClick={handlePrevious} className='rotate-left'>
        <img src={Flèche} alt="Flèche précédente" />
          </button>
        <button onClick={handleNext} className='btn-right'>
        <img src={Flèche} alt="Flèche suivante" />
        </button>
        </div>
        <p className='HelloPlanets'>{hello[planetsIndex]}</p>
     </div>
    </>
  )
}

export default App
