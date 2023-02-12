import React from "react";
import css from "./Services.module.css";
import serviceIllus2 from "../../assets/serviceIllus2.png";
const ServiceSecond = () => {
  return (
    <div
      className={`${css.wrapper} d-flex justify-content-center align-items-center `}
    >
      <div className="me-5">
        <div>
          <h1 className={`${css.textTop}`}>
            Sewage Cleaning <br />
            Service
          </h1>
          <h5 className={`${css.textMid}`}>
            Schedule Sewage Cleaning of private Premises
            <br /> or locations near you.
          </h5>
          <button className={`${css.button}`}> Schedule Now</button>
        </div>
      </div>
      <div className={`${css.imageHolder} ms-5`}>
        <img
          className={css.illustrationSecond}
          src={serviceIllus2}
        ></img>
      </div>
    </div>
  );
};

export default ServiceSecond;
