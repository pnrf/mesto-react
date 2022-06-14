function Card({card, key, name, link, likes, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img onClick={handleClick} src={link} alt={name} className="card__image" />
      <button className="card__del-button" type="button"></button>
      <div className="card__wrapper">
        <h2 className="card__title">{name}</h2>
        <div className="card__likes-wrapper">
          <button className="card__like-button" type="button"></button>
          <p className="card__likes-counter">{likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
