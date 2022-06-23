import '../index.css';
import api from '../utils/api';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import React, { useEffect } from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setCurrentUser(profileInfo);
      setCards(card);
    }).catch((err) => {
      console.error(err);
    })
  }, [])


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
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {api.updateUserInfo(data).then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />

        <Main
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
          cards={cards}
          setCards={setCards}
        />

        <Footer />

        <EditProfilePopup
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onUpdateUser = {handleUpdateUser}
        />

        {/* <PopupWithForm
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          name = 'profile'
          title = 'Редактировать профиль'
          children = {
            <>
              <label className="popup__field">
                <input id="name-input" name="userName" className="popup__input" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input id="about-input" name="userAbout" className="popup__input" type="text" placeholder="О себе" minLength="2" maxLength="200" required />
                <span className="popup__input-error"></span>
              </label>
            </>
          }
        /> */}

        <PopupWithForm
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          name = 'avatar'
          title = 'Обновить аватар'
          children = {
            <label className="popup__field">
              <input id="avatar-input" name="url" className="popup__input" type="url" placeholder="Ссылка на аватар" required />
              <span className="popup__input-error"></span>
            </label>
          }
        />

        <PopupWithForm
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          name = 'cards'
          title = 'Новое место'
          children = {
            <>
              <label className="popup__field">
                <input id="place-input" name="name" className="popup__input" type="text" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input id="url-input" name="link" className="popup__input" type="url" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error"></span>
              </label>
            </>
          }
        />

        <PopupWithForm
          name = 'confirm-deletion'
          title = 'Вы уверены?'
        />

        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
