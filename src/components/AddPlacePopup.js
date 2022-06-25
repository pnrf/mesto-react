import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [title, setTitle] = React.useState(null);
  const [link, setLink] = React.useState(null);

  React.useEffect(() => {
    if (isOpen) {
      setTitle('');
      setLink('');
    }
  }, [isOpen])

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: title,
      link: link
    });
  }

  return (
    <PopupWithForm
      isOpen = {isOpen}
      onClose = {onClose}
      onSubmit = {handleSubmit}
      name = 'cards'
      title = 'Новое место'
      children = {
        <>
          <label className="popup__field">
            <input id="place-input" name="name" className="popup__input" value={title} onChange={handleTitleChange} type="text" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="url-input" name="link" className="popup__input" value={link} onChange={handleLinkChange} type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error"></span>
          </label>
        </>
      }
    />
  )

}

export default AddPlacePopup;
