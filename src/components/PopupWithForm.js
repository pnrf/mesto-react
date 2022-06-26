import { useEffect } from 'react';
import FormValidator from './FormValidator';

function PopupWithForm({isOpen, onClose, onSubmit, isLoading, name, title, submitButton, submitBtnLoading, children}) {

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

  useEffect (() => {
    if (isOpen) {
      let newFormValidator = new FormValidator({
        formElement: document.querySelector(`[name="${`popup-${name}-form`}"]`),
        formSelectors: {
          inputFieldSelector: '.popup__field',
          inputSelector: '.popup__input',
          inputErrorMessageClass: '.popup__input-error',
          inputErrorUnderlineClass: 'popup__input_type_error',
          activeErrorClass: 'popup__input-error_active',
          inactiveSubmitButtonClass: 'popup__save-button_inactive',
          popupSubmitButtonSelector: '.popup__save-button'
        }
      });

      newFormValidator.enableValidation();
      return () => {
        newFormValidator.resetValidation();
        newFormValidator = null;
      }
    };
  }, [isOpen])

  return (
    <section className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close-button" type="button"></button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
          <form name={`popup-${name}-form`} className="popup__input-list" onSubmit={onSubmit}>
            {children}
            <button className={`popup__save-button `} type="submit">{isLoading ? submitBtnLoading : submitButton}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopupWithForm;
