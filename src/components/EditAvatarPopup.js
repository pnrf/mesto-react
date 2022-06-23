import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const ref = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value
    });
  }

  React.useEffect(() => {
    ref.current.value = '';
  }, [isOpen]);

  return(
    <PopupWithForm
      isOpen = {isOpen}
      onClose = {onClose}
      onSubmit = {handleSubmit}
      name = 'avatar'
      title = 'Обновить аватар'
      children = {
        <label className="popup__field">
          <input id="avatar-input" ref={ref} name="url" className="popup__input" type="url" placeholder="Ссылка на аватар" required />
          <span className="popup__input-error"></span>
        </label>
      }
    />
  )
}

export default EditAvatarPopup;
