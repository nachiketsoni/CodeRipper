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
                      <h2 className="card-price"> <span className="text-decoration-line-through" >$30</span> Free</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>500 MAUs</li>
                        <li>3 projects</li>
                        <li>Unlimited guides</li>
                        <li>Unlimited flows</li>
                        <li>Unlimited branded themes</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Premium</span>
                      <h2 className="card-price">$50</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>All starter features, plus:</li>
                        <li>Unlimited projects</li>
                        <li>Unlimited fully customizable themes</li>
                        <li>A dedicated Customer Success Manager</li>
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
