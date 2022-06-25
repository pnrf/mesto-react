import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  }


  return (
    <PopupWithForm
      isOpen = {isOpen}
      onClose = {onClose}
      onSubmit = {handleSubmit}
      isLoading = {isLoading}
      name = 'profile'
      title = 'Редактировать профиль'
      submitButton = 'Сохранить'
      submitBtnLoading = 'Сохранение...'
      children = {
        <>
          <label className="popup__field">
            <input id="name-input" name="userName" className="popup__input" value={name} onChange={handleNameChange} type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="about-input" name="userAbout" className="popup__input" value={description} onChange={handleDescriptionChange} type="text" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__input-error"></span>
          </label>
        </>
      }
    />
  )
}

export default EditProfilePopup;
