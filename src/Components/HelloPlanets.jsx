const namesPlanets = [
  "Earth",
  "Mars",
  "Neptune",
  "Saturn",
  "Uranus",
  "Venus",
  "Mercury",
  "Jupiter",
];

const hello = namesPlanets.map((name, index) => {
  return <p key={index}>Hello, {name} !</p>;
});

export default hello;
