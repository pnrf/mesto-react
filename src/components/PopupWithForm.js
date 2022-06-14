function PopupWithForm({isOpen, onClose, name, title, children}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close-button" type="button"></button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
          <form name={`popup-${name}-form`} className="popup__input-list" novalidate>
            {children}
            <button className="popup__save-button popup__save-button_inactive" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopupWithForm;
