import React from "react";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div>
      <section className="pricing-section">
        <div className="pricing">
          <div className="pricing-body">
            <div className="pricing-body-header">
              <h2 className="text-dark font-weight-bold">Subscription</h2>
            </div>
            <div className="pricing-body-plans">
              <div className="active" id="pricing__monthly__plan">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Starter</span>
                      <h2 className="card-price"> <span className="text-decoration-line-through" >100 ₹</span> Free</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>Quick PickUp </li>
                        <li>3 pick ups per month</li>
                        <li>One time sewage cleanup</li>
                        
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Premium</span>
                      <h2 className="card-price">500 ₹</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>All starter features, plus:</li>
                        <li>Extra credits</li>
                        <li>30 pickups per month</li>
                        <li>Unlimited sewage clean up</li>
                        <li>Email support</li>
                        <li>IVRS Facility</li>

                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
