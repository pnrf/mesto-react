import { useEffect } from 'react';

function ConfirmationPopup({card, onClose, name, title, onCardDelete}) {

  useEffect(() => {
    if (card) {
      function handleEscClose(event) {
        if (event.key === 'Escape') {
          onClose();
        }
      }
      document.addEventListener('keydown', handleEscClose);
      return () => {document.removeEventListener('keydown', handleEscClose)}
    }
  }, [card]);

  useEffect(() => {
    if (card) {
      function handleOverlayClose(event) {
        if (event.target.classList.contains('popup_opened')) {
          onClose();
        }
      }
      document.addEventListener('mousedown', handleOverlayClose);
      return () => {document.removeEventListener('mousedown', handleOverlayClose)}
    }
  }, [card])

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
