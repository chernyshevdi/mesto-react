import {api} from '../utils/Api.js'
import React, { useEffect, useState } from 'react';
import Card from './Card.js'

function Main(props) {

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    

    useEffect(() => {
        api.getUserData()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar)
        })
    }, [])

    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getCards()
        .then((res) => {
            setCards(res)
        })
    }, [])

    

    return (
    <>
        <section className="profile">
            <div className="profile__avatar">
                <div className="profile__overlay">
                    <img className="profile__image" src={userAvatar} alt ="Аватар профиля" onClick={props.onEditAvatar}/>
                </div>
            </div>
            <div className="profile__info">
                <div className="profile__text">
                    <h1 className="profile__name" >{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__edit-button" type="button" aria-label="Редактирование профиля" onClick={props.onEditProfile}></button>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавление фотографий" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
        {cards.map((item, i) => (
            <Card onCardClick={props.onCardClick} card={item}/>
        ))}
        </section>
    </>
    )
}

export default Main;
