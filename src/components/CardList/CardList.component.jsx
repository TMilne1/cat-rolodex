import React from 'react';
import "../CardList/card-list.styles.css";
import Card from '../Card/Card.component'

const CardList = (props) => {
    return(
        <div className='card-list'>
            {props.cats.map((cat) => {
              return (<Card key={cat.id} cat = {cat}/>)
            }
            )}
        </div>
    )
}


export default CardList;