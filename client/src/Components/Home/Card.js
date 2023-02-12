import React from "react";
import css from "./Card.module.css";


import serviceIllus1 from "../../assets/serviceIllus1.png";
import sewageIllus from "../../assets/sewageIllus.png";
import hazardousWasteIllus from "../../assets/hazardousWasteIllus.png";

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
              <img src={serviceIllus1}></img>
            </div>
          </div>
          <h4 className="mt-4">Residential Waste Pickup</h4>
          <p className="mt-4">
            There is no arrangement of door to door collection and segregation
            of Residential waste at source in the city.
          </p>
        </div>
        <div className={`${css.customCard}  text-center px-3`}>
          <div className="imagePan d-flex justify-content-center">
            <div className={css.imageHolder}>
              <img src={sewageIllus}></img>
            </div>
          </div>
          <h4 className="mt-4">Sewage Cleaning Service</h4>
          <p className="mt-4">
            Removing built-up debris, leaves, grease, grit, sand, plastic bags,
            rags and obstructions such as tree roots from the sewer system.
          </p>
        </div>
        <div className={`${css.customCard} text-center px-3`}>
          <div className="imagePan d-flex justify-content-center">
            <div className={css.imageHolder}>
              <img src={hazardousWasteIllus}></img>
            </div>
          </div>
          <h4 className="mt-4">Commercial Waste Pickup</h4>
          <p className="mt-4">
            Sets the tone of the work environment, discipline, and
            professionalism they offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
