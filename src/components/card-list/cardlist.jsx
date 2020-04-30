import React from 'react';
import { Card } from '../card/cardcomponent.jsx';
import './card-liststyle.css';

export const CardList= (props) => (
    <div className='card-list'>
        {
            props.angel.map(angel => (
            <Card key={angel.id} angel={angel}/>
            ))
        }
    </div>
);