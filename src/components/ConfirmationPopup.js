import { useEffect } from 'react';

function ConfirmationPopup({card, onClose, onCloseEsc, onCloseOverlay, name, title, onCardDelete}) {

  useEffect(() => {
    if (card) {
      onCloseEsc();
      onCloseOverlay();
    }
  }, [card]);

  function handleDeleteClick() {
    onCardDelete(card);
    onClose();
  }

  return (
    <section className={`popup popup_type_${name} ${card && 'popup_opened'}`}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close-button" type="button"></button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
          <div name="popup-confirmation-form" className="popup__input-list" noValidate>
            <button onClick={handleDeleteClick} className="popup__save-button" type="submit">Да</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationPopup;
