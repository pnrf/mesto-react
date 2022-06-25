import { useEffect } from 'react';

function ImagePopup({card, onClose}) {

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

  return (
    <section className={`popup popup_type_image ${card && 'popup_opened'}`} >
      <figure className="popup__container popup__container_type_image">
        <button onClick={onClose} className="popup__close-button popup__close-button_type_image" type="button"></button>
        <img src={card && card.link} alt={card && card.name} className="popup__image" />
        <figcaption className="popup__figcaption">{card && card.name}</figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;
