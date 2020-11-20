import virusImage from '../../../../image/virus.png'
import sintomaImage from "../../../../image/sintomas.png";
import prevencion from "../../../../image/prevencion.png";
import estadictica from "../../../../image/estadistica.png";
import Covid from "../../../Quiz/QuizFinal"
const dataCirculo=[
  {
    image:{virusImage},
    nameLevel:'Covid',
    claseContenedor:'primera',
    direccion:"/Quiz" 
  },
  {
    image:{sintomaImage},
    nameLevel:'Prevención',
    claseContenedor:'segunda'  
  },
  {
    image:{prevencion},
    nameLevel:'Sintomas',
    claseContenedor:'tercera'  
  },
  {
    image:{estadictica},
    nameLevel:'Estadisticas',
    claseContenedor:'cuarta' 
  }
]
export default dataCirculo