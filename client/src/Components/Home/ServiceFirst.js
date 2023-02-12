import React from "react";
import css from "./Services.module.css";
import serviceIllustration1 from "../../assets/image 5.png";
const Services = () => {
  return (
    <div
      className={`${css.wrapper} d-flex justify-content-center align-items-center me-5`}
    >
      <div className={css.imageHolder}>
        <img className={css.illustration} src={serviceIllustration1}></img>
      </div>

      <div>
        <div className={`${css.right} w-75`}>
          <div>
            <h1 className={`${css.textTop}`}>
              Quick Pickup <br />
              Service
            </h1>
            <h5 className={`${css.textMid}`}>
              Schedule a Quick Pickup through <br /> a single call of your phone
            </h5>
            <button type="button" className={`${css.button}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
          Schedule Now
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
