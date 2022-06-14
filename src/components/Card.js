function Card(props) {
  return (
    <li className="card">
      <img src={props.link} alt={props.name} className="card__image" />
      <button className="card__del-button" type="button"></button>
      <div className="card__wrapper">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__likes-wrapper">
          <button className="card__like-button" type="button"></button>
          <p className="card__likes-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
