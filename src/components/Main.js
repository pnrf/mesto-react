function Main() {
    return (
        <main>
        <section className="profile">
          <div className="profile__container">
            <button className="profile__avatar-edit-button" type="button"><img src="<%=require('./images/img-profile-avatar.jpg')%>" alt="Аватар для профайла" className="profile__avatar" /></button>
            <div className="profile__describe">
              <div className="profile__title-wrapper">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button"></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
    )
};

export default Main;