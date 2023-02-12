import React, { Fragment } from "react";
import homeIllustration from "../../assets/image 1.png";
import Card from "./Card";
import css from "./Home.module.css";
import ServiceFirst from "./ServiceFirst";
import ServiceSecond from "./ServiceSecond";
import ServiceThird from "./ServiceThird";
import Subscription from "./Subscription";
const Home = () => {
  return (
    <Fragment>
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
      <Card />
      <ServiceFirst />
      <ServiceSecond />
      <ServiceThird />
      <Subscription />
    </Fragment>
  );
};

export default Home;
