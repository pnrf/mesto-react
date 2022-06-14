
// import './App.css';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    {/* <!-- POPUP 1: profile editing form --> */}
      <section className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <div className="popup__content">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form name="popup-profile-form" className="popup__input-list" novalidate>
              <label className="popup__field">
                <input id="name-input" name="userName" className="popup__input" type="text" placeholder="Имя" minlength="2" maxlength="40" required />
                <span className="popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input id="about-input" name="userAbout" className="popup__input" type="text" placeholder="О себе" minlength="2" maxlength="200" required />
                <span className="popup__input-error"></span>
              </label>
              <button className="popup__save-button popup__save-button_inactive" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </section>
    {/* <!-- POPUP 2: change profile avatar --> */}
      <section className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <div className="popup__content">
            <h3 className="popup__title">Обновить аватар</h3>
            <form name="popup-avatar-form" className="popup__input-list" novalidate>
              <label className="popup__field">
                <input id="avatar-input" name="url" className="popup__input" type="url" placeholder="Ссылка на аватар" required />
                <span className="popup__input-error"></span>
              </label>
              <button className="popup__save-button popup__save-button_inactive" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </section>
    {/* <!-- POPUP 3: card adding form --> */}
      <section className="popup popup_type_cards">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <div className="popup__content">
            <h3 className="popup__title">Новое место</h3>
            <form name="popup-cards-form" className="popup__input-list" novalidate>
              <label className="popup__field">
                <input id="place-input" name="name" className="popup__input" type="text" placeholder="Название" minlength="2" maxlength="30" required />
                <span className="popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input id="url-input" name="link" className="popup__input" type="url" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error"></span>
              </label>
              <button className="popup__save-button popup__save-button_inactive" type="submit">Создать</button>
            </form>
          </div>
        </div>
      </section>
    {/* <!-- POPUP 4: confirm card deletion --> */}
      <section className="popup popup_type_confirm-deletion">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <div className="popup__content">
            <h3 className="popup__title">Вы уверены?</h3>
            <form name="popup-confirmation-form" className="popup__input-list" novalidate>
              <button className="popup__save-button" type="submit">Да</button>
            </form>
          </div>
        </div>
      </section>
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