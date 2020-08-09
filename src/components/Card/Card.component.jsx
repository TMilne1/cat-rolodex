import React from 'react';
import './card.styles.css';

const Card = (props) =>{
    return(
        <div className = 'card-container'>
            <h2>{props.cat.name}</h2>
            <p> {props.cat.email} </p>
            <img alt="kitten" src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}></img>
        </div>
    )
}
export default Card;