function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened`: ""}`}>
        <div className="popup__container">
          <button onClick={props.onClose} className="popup__close-button" type="button"></button>
          <div className="popup__content">
            <h3 className="popup__title">{props.title}</h3>
            <form name={`popup-${props.name}-form`} className="popup__input-list" novalidate>
              {props.children}
              <button className="popup__save-button popup__save-button_inactive" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default PopupWithForm;
