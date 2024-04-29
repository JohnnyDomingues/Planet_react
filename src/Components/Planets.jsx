import PropTypes from 'prop-types'; // Importer PropTypes
import planetsList from './PlanetsList';


function Planets ({ index }) {  // Recevoir l'index comme prop

  const planet = planetsList[index]; // Utiliser l'index pour accéder à la bonne planète) 

  return (

    <div className="card">
      <img src={planet.image} alt="image de la planète" /> 
      <div>
      <h2 className='NamePlanets'>{planet.name}</h2>
      </div>
      <div className="card-text">
        <p>{planet.text}</p>
      </div>
    </div>
  )
}

Planets.propTypes = { // Définir la validation des props
  index: PropTypes.number.isRequired,
};

export default Planets;