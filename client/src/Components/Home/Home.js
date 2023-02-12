import React from "react";
import homeIllustration from "../../assets/image 1.png";
import css from "./Home.module.css";
const Home = () => {
  return (
    <div className="d-flex align-items-center">
      <div className={css.blob}></div>
      <div className="left w-50">
        <div className={css.textContainer}>
          <h1 className={css.largeText}>
            Save The <br /> Waste
          </h1>
          <h5 className={css.smallText}>
            Hassle free door-to-door pickup service
          </h5>
          <button className={css.buttonStyle}>Get Started</button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className={css.imageHolder}>
          <img className={css.illustration} src={homeIllustration}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
