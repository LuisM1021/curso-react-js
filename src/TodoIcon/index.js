import {ReactComponent as Diamond} from './diamond.svg'
import './TodoIcon.css'

const iconTypes = {
    "diamond":(color) => <Diamond style={{
        fill: color
    }}/>
}
function TodoIcon({type,color}){
    return(
        <h1>{iconTypes[type] (color)}Felicidades no tienes TODOS por completar{iconTypes[type] (color)}</h1>
        
    )
}
export {TodoIcon}
