import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveDetails } from "../../Store/PickupSlice/PickupSlice";
import { loadUserAsync } from "../../Store/UserSlice/Userslice";
import css from "./Pickup.module.css";

const Pickup = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, error } = useSelector((state) => state.user);

  const [dets, setdets] = useState({
    name: user?.name || "",
    email: user?.email || "",
    contact: user?.contact || "",
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    pincode: user?.pincode || "",
    type: user?.type || "",
    pickupDate: user?.pickupDate || "",
    pickupTime: user?.pickupTime || "",
    pickupInfo: user?.pickupInfo || "",
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUserAsync());
    if (!isAuthenticated) Navigate("/register");
  }, [isAuthenticated]);

  const changeHandler = (e) => {
    setdets({ ...dets, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDetails(dets));
    navigate("/pickup/second");
  };

  return (
    <div>
      <div className={`${css.ctn}`}>
        <div
          className={`${css.overlay} d-flex align-items-center justify-content-center`}
        >
          <div
            id={`${css.box}`}
            className="d-flex align-items-center justify-content-center"
          >
            <div id={`${css.formBox}`}>
              <form className="text-center">
                <h3 className={`text-center ${css.heading}`}>
                  Send Pick Up Request
                </h3>
                <input
                  onChange={changeHandler}
                  defaultValue={user?.name}
                  disabled={user?.name && true}
                  name="name"
                  required
                  placeholder="name"
                  className={`mb-2 ${css.btnType}`}
                  type="text"
                />
                <input
                  onChange={changeHandler}
                  defaultValue={user?.email}
                  disabled={user?.email && true}
                  name="email"
                  required
                  placeholder="email"
                  className={`mb-2 ${css.btnType}`}
                  type="email"
                />
                <input
                  onChange={changeHandler}
                  defaultValue={user?.contact}
                  disabled={user?.contact && true}
                  required
                  name="contact"
                  placeholder="contact"
                  className={`mb-2 ${css.btnType}`}
                  type="number"
                />
                <input
                  onChange={changeHandler}
                  defaultValue={user?.address}
                  name="address"
                  placeholder="address"
                  required
                  className={`mb-2 ${css.btnType}`}
                  type="text"
                />
                <input
                  onChange={changeHandler}
                  defaultValue={user?.city}
                  name="city"
                  placeholder="city"
                  required
                  className={`mb-2 ${css.btnType}`}
                  type="text"
                />
                <input
                  onChange={changeHandler}
                  defaultValue={user?.state}
                  name="state"
                  placeholder="state"
                  required
                  className={`mb-2 ${css.btnType}`}
                  type="text"
                />
                <input
                  onChange={changeHandler}
                  defaultValue={user?.pincode}
                  name="pincode"
                  placeholder="pincode"
                  required
                  className={`mb-2 ${css.btnType}`}
                  type="number"
                />
                <button
                  onClick={SubmitHandler}
                  disabled={
                    dets.email ||
                    dets.address ||
                    dets.city ||
                    dets.contact ||
                    dets.name ||
                    dets.pincode ||
                    dets.state
                      ? true
                      : false
                  }
                  className={`mb-3 ${css.btnType}`}
                  type="submit"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickup;
