function ImagePopup() {
  return (
    <section className="popup popup_type_image">
      <figure className="popup__container popup__container_type_image">
        <button className="popup__close-button popup__close-button_type_image" type="button"></button>
        <img src="#" alt="" className="popup__image" />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;
