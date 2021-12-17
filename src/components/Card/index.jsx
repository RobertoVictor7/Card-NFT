import equilibrium from '../../images/image-equilibrium.jpg'

import './style.css'

function Card(props) {
    return (
        <div className="Card">
            <div className='CardImage'>
                    <img src={equilibrium} alt="Equilibrium img"/>
            </div>
            <div className='CardText'>
            <h2>{props.name}</h2>
            <p>Our {props.name} collection promotes balance and calm</p>
            </div>
        </div>
    )
}

export default Card