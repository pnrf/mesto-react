import React, { useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';
import initialAvatar from '../images/img-profile-avatar.jpg';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто')
  const [userDescription, setUserDescription] = React.useState('Исследователь океана')
  const [userAvatar, setUserAvatar] = React.useState(initialAvatar)
  const [cards, setCards] = React.useState([])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setUserName(profileInfo.name)
      setUserDescription(profileInfo.about)
      setUserAvatar(profileInfo.avatar)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <button onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar-edit-button" type="button"></button>
          <div className="profile__describe">
            <div className="profile__title-wrapper">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={onEditProfile} className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__add-button" type="button"></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              card = {card}
              key = {card._id}
              name = {card.name}
              link = {card.link}
              likes = {card.likes.length}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
};

export default Main;
