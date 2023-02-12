import React, { useState } from "react";
import css from "./Pickup.module.css";
import { saveDetails } from "../../Store/PickupSlice/PickupSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PickupSecond = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((e) => e.pickup.details);
  console.log(data);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/pickup/third");
  };
  return (
    <div className={` d-flex justify-content-center mt-5 w-100`}>
      <div className="w-50 text-center">
        <h2>Select Service</h2>
        <p className="mb-4">
          We require the type of service for accurate waste collection and
          management
        </p>
        <form onSubmit={submitHandler}>
          <select
            required
            onChange={(e) =>
              dispatch(saveDetails({ ...data, type: e.target.value }))
            }
            className="form-select"
            aria-label="Default select example"
          >
            <option selected value="">
              Choose service
            </option>
            <option value="Personal">Personal</option>
            <option value="Commercial/Business">Commercial/Buisness</option>
            <option value="Dumpster">Dumpster</option>
          </select>
          <input
            type="submit"
            value="Proceed"
            className="btn btn-success mt-4"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default PickupSecond;
