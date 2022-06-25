import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <button onClick={onEditAvatar} className="profile__avatar-edit-button" type="button">
            <img src={currentUser.avatar} alt="Аватар для профайла" className="profile__avatar" />
          </button>
          <div className="profile__describe">
            <div className="profile__title-wrapper">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button onClick={onEditProfile} className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
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
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
};

export default Main;
