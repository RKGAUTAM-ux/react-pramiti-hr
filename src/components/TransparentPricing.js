import React, { useState } from "react";

const TransparentPricing = () => {
  // State to toggle between yearly and monthly plans
  const [isMonthly, setIsMonthly] = useState(false);

  // Handle toggle switch change
  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">Simple and Transparent Pricing</h2>
        <div className="toggle-container">
          <span>Yearly plans</span>
          <label className="toggle-switch">
            <input type="checkbox" onChange={handleToggle} checked={isMonthly} />
            <span className="slider"></span>
          </label>
          <span>Monthly plans</span>
        </div>
      </div>

      <div className="pricing-plans">
        {/* Professional Plan */}
        <div className="pricing-card">
          <h3 className="plan-title">Professional Plan</h3>
          <p className="plan-subtitle">For Individuals and Small Teams</p>
          <p className="plan-price">
            <span>{isMonthly ? "$15" : "$150"}</span>
            {isMonthly ? "/per user per month" : "/per user per year"}
          </p>
          <button className="plan-button">Start 14-day Free Trial →</button>
          <ul className="plan-features">
            <li>✔ Up to 15 Jobs per Account</li>
            <li>✔ Up to 10,000 Candidates</li>
            <li>✔ Unlimited Hiring Managers</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card highlighted">
          <h3 className="plan-title">Enterprise Plan</h3>
          <p className="plan-subtitle">For Industry Leaders</p>
          <p className="plan-price">
            <span>{isMonthly ? "$35" : "$350"}</span>
            {isMonthly ? "/per user per month" : "/per user per year"}
          </p>
          <button className="plan-button">Start 14-day Free Trial →</button>
          <ul className="plan-features">
            <li>✔ Unlimited Jobs</li>
            <li>✔ Unlimited Candidates</li>
            <li>✔ Unlimited Hiring Managers</li>
          </ul>
        </div>

        {/* Custom Plan */}
        <div className="pricing-card">
          <h3 className="plan-title">Custom Plan</h3>
          <p className="plan-subtitle">For Custom Needs</p>
          <p className="plan-price">{isMonthly ? "On Demand" : "On Demand"}</p>
          <button className="plan-button">Contact Us →</button>
          <ul className="plan-features">
            <li>✔ Everything in Enterprise Plan</li>
            <li>✔ Custom Features</li>
            <li>✔ Custom Integrations</li>
          </ul>
        </div>
      </div>

      <button className="compare-button">Compare All Price Plans →</button>
    </section>
  );
};

export default TransparentPricing;
