import equilibrium from '../../images/image-equilibrium.jpg'
import ethereumIcon from '../../images/icon-ethereum.svg'
import clock from '../../images/icon-clock.svg'

import './style.css'

function Card(props) {
    return (
        <div className="Card">
            <div className='CardImage'>
                    <img src={equilibrium} alt="Equilibrium img"/>
            </div>

            <div className='CardText'>
                <h2>{props.name} {props.id}</h2>
                <p>Our {props.name} collection promotes balance and calm</p>
            </div>

            <div className='CardInfo'>
                <img src={ethereumIcon} alt="ethereum"/>
                <p>{props.value} ETH</p>

                <div className='TimeInfo'>
                    <img src={clock} alt="clock" />
                    <p>3 days left</p>
                </div>

            </div>

        </div>
    )
}

export default Card