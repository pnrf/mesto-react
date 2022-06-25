import { useEffect } from 'react';

function PopupWithForm({isOpen, onClose, onSubmit, name, title, submitButton, children}) {

  useEffect(() => {
    if (isOpen) {
      function handleEscClose(event) {
        if (event.key === 'Escape') {
          onClose();
        }
      }
      document.addEventListener('keydown', handleEscClose);
      return () => {document.removeEventListener('keydown', handleEscClose);}
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      function handleOverlayClose(event) {
        if (event.target.classList.contains('popup_opened')) {
          onClose();
        }
      }
      document.addEventListener('mousedown', handleOverlayClose);
      return () => {document.removeEventListener('mousedown', handleOverlayClose)}
    }
  }, [isOpen])

  return (
    <section className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close-button" type="button"></button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
          <form name={`popup-${name}-form`} className="popup__input-list" onSubmit={onSubmit}>
            {children}
            <button className="popup__save-button" type="submit">{submitButton}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopupWithForm;
