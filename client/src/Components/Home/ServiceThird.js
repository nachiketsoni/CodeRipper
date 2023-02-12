import React from "react";
import css from "./Services.module.css";

const ServiceThird = () => {
  return (
    <div
      className={`${css.wrapper} d-flex justify-content-center align-items-center `}
    >
      <div className={css.imageHolder}>
        <img
          className={css.illustration}
          src="https://static.vecteezy.com/system/resources/thumbnails/000/379/337/small_2x/Business_2__2884_29.jpg"
        ></img>
      </div>

      <div>
        <div className={`${css.right} w-75`}>
          <div>
            <h1 className={`${css.textTop}`}>
              Get free Goodies
              <br />
            </h1>
            <h5 className={`${css.textMid}`}>
              Redeem Coins to get coupons, merchandise <br /> and many more
              amazing rewards.
            </h5>
            <button className={`${css.button}`}> Redeem Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceThird;
