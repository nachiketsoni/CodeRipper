import React, { useState } from "react";
import css from "./Pickup.module.css";
import {
  createPickupAsync,
  saveDetails,
} from "../../Store/PickupSlice/PickupSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PickupSecond = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((e) => e.pickup.details);
  const isLoading = useSelector((e) => e.pickup.loading);

  const submitHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <div className={` d-flex justify-content-center mt-5 w-100`}>
      <div className="w-50 text-center">
        <h2>Select Pick up day</h2>
        <p className="mb-4">
          We need pickup day to monitor the pickup frequency to notify you about
          your pickups.
        </p>
        <form onSubmit={submitHandler}>
          <select
            required
            onChange={(e) =>
              dispatch(saveDetails({ ...data, pickupDay: e.target.value }))
            }
            className="form-select"
            aria-label="Default select example"
          >
            <option selected value="">
              Choose Pickup Day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          {toggle ? null : (
            <input
              type="submit"
              value="Ok"
              className="btn btn-success mt-4"
            ></input>
          )}
        </form>
        {toggle ? (
          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              setToggle2(!toggle2);
            }}
          >
            <select
              required
              onChange={(e) =>
                dispatch(saveDetails({ ...data, pickupTime: e.target.value }))
              }
              className="form-select"
              aria-label="Default select example"
            >
              {" "}
              <option value="" selected>
                Choose pickup time
              </option>
              <option value="9:00AM">9:00AM</option>
              <option value="10:00AM">10:00AM</option>
              <option value="11:00AM">11:00AM</option>
              <option value="12:00PM">12:00PM</option>
              <option value="1:00PM">1:00PM</option>
              <option value="2:00PM">2:00PM</option>
              <option value="3:00PM">3:00PM</option>
              <option value="4:00PM">4:00PM</option>
              <option value="5:00PM">5:00PM</option>
              <option value="6:00PM">6:00PM</option>
              <option value="7:00PM">7:00PM</option>
              <option value="8:00PM">8:00PM</option>
            </select>
            {toggle2 ? null : (
              <input
                type="submit"
                value="Proceed"
                className="btn btn-success mt-4"
              ></input>
            )}
          </form>
        ) : null}
        {toggle2 ? (
          <form
            className="mt-5 form-group"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(createPickupAsync(data));
            }}
          >
            <input
              className="form-control"
              type="text"
              placeholder="Additional information"
              onChange={(e) => {
                dispatch(saveDetails({ ...data, pickupInfo: e.target.value }));
              }}
            ></input>
            {isLoading ? (
              <div className="spinner-border mt-4" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <input
                type="submit"
                value="Confirm"
                className="btn btn-success mt-4"
              ></input>
            )}
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default PickupSecond;
