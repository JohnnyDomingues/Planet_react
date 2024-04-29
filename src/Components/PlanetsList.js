import TerreImage from "../assets/Terre.jpg";
import MarsImage from "../assets/Mars.jpg";
import NeptuneImage from "../assets/Neptune.jpg";
import SaturneImage from "../assets/Saturne.jpg";
import UranusImage from "../assets/Uranus.jpg";
import VenusImage from "../assets/Venus.jpg";
import MercureImage from "../assets/Mercury.jpg";
import JupiterImage from "../assets/Jupiter.jpg";

const planetsList = [
  {
    name: "Terre",
    image: TerreImage,
    text: "La Terre est une planète dont la structure interne est composée d’un noyau, d’un manteau et d’une croute rocheuse. La majeure partie de la surface de la Terre est recouverte d’eau liquide.",
  },

  {
    name: "Mars",
    image: MarsImage,
    text: "Mars est une planète deux fois plus petite et dix fois moins massive que la Terre. Sa surface a une teinte orangée. C’est sur cette planète qu’on trouve le canyon le plus profond du système solaire.",
  },
  {
    name: "Neptune",
    image: NeptuneImage,
    text: "Tout comme Uranus, Neptune aurait un noyau dense et rocheux recouvert d’une couche d’eau, de méthane et d’ammoniac liquides. Sa surface et son atmosphère sont composées de gaz.",
  },

  {
    name: "Saturne",
    image: SaturneImage,
    text: "Saturne est la deuxième planète la plus volumineuse du système solaire après Jupiter. C’est une planète gazeuse qui aurait un noyau solide fait de métaux et de roche, entouré d’hydrogène liquide.",
  },
  {
    name: "Uranus",
    image: UranusImage,
    text: "Tout comme Neptune, Uranus aurait un noyau dense et rocheux recouvert d’une couche d’eau, de méthane et d’ammoniac liquides. Sa surface et son atmosphère sont composées de gaz.",
  },

  {
    name: "Venus",
    image: VenusImage,
    text: "Vénus est une planète un peu plus petite et un peu moins massive que la Terre. Il y a plusieurs volcans à sa surface, probablement plus que sur la Terre. Elle est recouverte de nuages et d'une épaisse atmosphère.",
  },
  {
    name: "Mercure",
    image: MercureImage,
    text: "Mercure est la planète la plus petite et la moins massive des planètes du système solaire. Elle est ainsi formée d’un très gros noyau de fer, sa surface est quant à elle parsemée de cratères, tout comme la Lune.",
  },
  {
    name: "Jupiter",
    image: JupiterImage,
    text: "Jupiter est une planète gazeuse. C’est la planète la plus volumineuse et la plus massive du système solaire. Elle est environ 11 fois plus grosse et 300 fois plus massive que la Terre. Sa gravité est donc la plus importante.",
  },
];

export default planetsList;
