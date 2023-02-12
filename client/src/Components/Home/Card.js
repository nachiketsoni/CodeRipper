import React from "react";
import css from "./Card.module.css";

const Card = () => {

  return (
    <div className={`${css.cardWrapper} mb-5`}>
      <div
        className={`${css.heading} d-flex flex-column align-items-center w-100`}
      >
        <h1 id="serv" className={css.fontBold}>QUICKCLEAN SERVICES</h1>
        <p className={`${css.paraWidth} text-center`}>
        QuickClean Solutions is a Bhopal-based startup dedicated to revolutionizing the waste management system. Utilizing cutting-edge technology and innovative methods, we aim to create sustainable solutions for communities and businesses to effectively manage and reduce waste. Our goal is to create a cleaner and greener environment for the people of Bhopal and beyond.
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <div className={`${css.customCard} text-center px-3 pb-4`}>
          <div className="imagePan d-flex justify-content-center">
            <div className={css.imageHolder}>
              <img src="https://o.remove.bg/downloads/2190e73b-b372-47ef-bc32-48fd9dc31f87/green-recycle-garbage-bin-sign-arrow-vector-illustration-green-recycle-garbage-bin-160885709-removebg-preview.png"></img>
            </div>
          </div>
          <h4 className="mt-4">Residential Waste Pickup</h4>
          <p className="mt-4">
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
            reproduced in their exact original form.
          </p>
        </div>
        <div className={`${css.customCard}  text-center px-3`}>
          <div className="imagePan d-flex justify-content-center">
            <div className={css.imageHolder}>
              <img src="https://o.remove.bg/downloads/cd04eb91-07bd-4329-aa02-da87b4c182fa/images-removebg-preview.png"></img>
            </div>
          </div>
          <h4 className="mt-4">Residential Waste Pickup</h4>
          <p className="mt-4">
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
            reproduced in their exact original form.
          </p>
        </div>
        <div className={`${css.customCard} text-center px-3`}>
          <div className="imagePan d-flex justify-content-center">
            <div className={css.imageHolder}>
              <img src="https://o.remove.bg/downloads/a76c515b-4aee-4e6d-8d35-7c756ea352e6/images-removebg-preview.png"></img>
            </div>
          </div>
          <h4 className="mt-4">Residential Waste Pickup</h4>
          <p className="mt-4">
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
            reproduced in their exact original form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
