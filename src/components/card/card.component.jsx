import React from 'react';
import './card.style.css';


export const Card = props => (
    <div className='card-container'>
        {/* <img
            alt="monster"
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180180`}
        /> */}
        
        <img className="image"
            src={`/images/${props.monster.id}.jpg`}
        />
        <h2> {props.monster.name}</h2>
        <p> {props.monster.id} </p>
    </div>
    
);