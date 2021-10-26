import React, { useEffect, useState } from 'react';

function Card(props) {
    

    function handleClick() {
        props.onCardClick(props.card);
      }  

    return (
        
            <div className="element">
                <img className="element__img" src={props.card.link} onClick ={handleClick}/>
                <div className="element__info">
                    <button className="element__delete" type="button" aria-label="Удалить"></button>
                    <h2 className="element__name">{props.card.name}</h2>
                    <div className="element__like-group">
                        <button className="element__like" type="button" aria-label="Лайк"></button>
                        <p className="element__like-counter">{props.card.likes.length}</p>
                    </div>
                </div>
            </div>
            )
}

export default Card;