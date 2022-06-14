import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      <PopupWithForm
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

      <ImagePopup />





      {/* <!-- POPUP 5: image preview --> */}
      <section className="popup popup_type_image">
        <figure className="popup__container popup__container_type_image">
          <button className="popup__close-button popup__close-button_type_image" type="button"></button>
          <img src="#" alt="" className="popup__image" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </section>
    {/* <!-- TEMPLATE for cards--> */}
      <template id="template" className="template">
        <li className="card">
          <img src="#" alt="" className="card__image" />
          <button className="card__del-button" type="button"></button>
          <div className="card__wrapper">
            <h2 className="card__title"></h2>
            <div className="card__likes-wrapper">
              <button className="card__like-button" type="button"></button>
              <p className="card__likes-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </div>

  );
}

export default App;
