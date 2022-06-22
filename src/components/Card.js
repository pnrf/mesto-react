import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, name, link, likes, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__del-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_visible' : 'card__like-button_hidden'}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img onClick={handleClick} src={link} alt={name} className="card__image" />
      <button className={cardDeleteButtonClassName} type="button"></button>
      <div className="card__wrapper">
        <h2 className="card__title">{name}</h2>
        <div className="card__likes-wrapper">
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="card__likes-counter">{likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
