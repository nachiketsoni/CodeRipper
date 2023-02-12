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
                      <h2 className="card-price">$30</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>500 MAUs</li>
                        <li>3 projects</li>
                        <li>Unlimited guides</li>
                        <li>Unlimited flows</li>
                        <li>Unlimited branded themes</li>
                        <li>Email support</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Pro</span>
                      <h2 className="card-price">$50</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>All starter features, plus:</li>
                        <li>Unlimited projects</li>
                        <li>Unlimited fully customizable themes</li>
                        <li>A dedicated Customer Success Manager</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Enterprise</span>
                      <h2 className="card-price">Let's Talk!</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>All Pro features</li>
                        <li>Unlimited MAUs</li>
                        <li>Dedicated environment</li>
                        <li>Enterprise account administration</li>
                        <li>Premium support and services</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pricing__anually__plan">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Starter</span>
                      <h2 className="card-price">$19</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>500 MAUs</li>
                        <li>3 projects</li>
                        <li>Unlimited guides</li>
                        <li>Unlimited flows</li>
                        <li>Unlimited branded themes</li>
                        <li>Email support</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Pro</span>
                      <h2 className="card-price">
                        $99<span>/month</span>
                      </h2>
                      <div className="card-users">
                        <input
                          list="pro__users__limit"
                          name="pro__users__input"
                          id="pro__users__input"
                        />
                        <datalist id="pro__users__limit">
                          <option value="50 MAUs" />
                          <option value="100 MAUs" />
                          <option value="500 MAUs" />
                          <option value="1000 MAUs" />
                          <option value="2500 MAUs" />
                        </datalist>
                        <span>Monthly active users</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>All starter features, plus:</li>
                        <li>Unlimited projects</li>
                        <li>Unlimited fully customizable themes</li>
                        <li>A dedicated Customer Success Manager</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Choose Plan</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span className="card-title">Enterprise</span>
                      <h2 className="card-price">Let's Talk!</h2>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>All Pro features</li>
                        <li>Unlimited MAUs</li>
                        <li>Dedicated environment</li>
                        <li>Enterprise account administration</li>
                        <li>Premium support and services</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button>Contact Us</button>
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
