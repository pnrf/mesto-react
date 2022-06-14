import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState()

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard();
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        name = {'profile'}
        title = {'Редактировать профиль'}
        children = {(
          <>
            <label className="popup__field">
              <input id="name-input" name="userName" className="popup__input" type="text" placeholder="Имя" minlength="2" maxlength="40" required />
              <span className="popup__input-error"></span>
            </label>
            <label className="popup__field">
              <input id="about-input" name="userAbout" className="popup__input" type="text" placeholder="О себе" minlength="2" maxlength="200" required />
              <span className="popup__input-error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        name = {'avatar'}
        title = {'Обновить аватар'}
        children = {(
          <>
            <label className="popup__field">
              <input id="avatar-input" name="url" className="popup__input" type="url" placeholder="Ссылка на аватар" required />
              <span className="popup__input-error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        name = {'cards'}
        title = {'Новое место'}
        children = {(
          <>
            <label className="popup__field">
              <input id="place-input" name="name" className="popup__input" type="text" placeholder="Название" minlength="2" maxlength="30" required />
              <span className="popup__input-error"></span>
            </label>
            <label className="popup__field">
              <input id="url-input" name="link" className="popup__input" type="url" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm
        name = {'confirm-deletion'}
        title = {'Вы уверены?'}
        children = {(
          <></>
        )}
      />

      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
      />

    </div>
  );
}

export default App;
