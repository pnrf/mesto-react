import { useEffect } from 'react';

function PopupWithForm({isOpen, onClose, onCloseEsc, onCloseOverlay, onSubmit, isLoading, name, title, submitButton, submitBtnLoading, children}) {

  useEffect(() => {
    if (isOpen) {
      onCloseEsc();
      onCloseOverlay();
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
            <button className={`popup__save-button `} type="submit">{isLoading ? submitBtnLoading : submitButton}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopupWithForm;
