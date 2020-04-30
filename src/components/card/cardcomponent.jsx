import React from 'react';
import './card.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="angletext" src={`https://robohash.org/${props.angel.id}?set=set2&size=180x180`}></img>
        <h2>{props.angel.name}</h2>
        {props.angel.email}
    </div>
)