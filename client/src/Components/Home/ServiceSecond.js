import React from "react";
import css from "./Services.module.css";
import serviceIllustration1 from "../../assets/image 5.png";
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
          src="https://t4.ftcdn.net/jpg/05/14/35/67/360_F_514356778_zpRqK2ezPd6xCt5J3zFDCf2N8vtK7gNd.jpg"
        ></img>
      </div>
    </div>
  );
};

export default ServiceSecond;
