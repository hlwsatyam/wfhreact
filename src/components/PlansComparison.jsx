import React from "react";
import "./PlansComparison.css"; // Import your CSS file for styling

const PlansComparison = () => {
  const plans = [
    {
      name: "Plan A",
      price: "Free",
      tasks: 50,
      ratePerTask: 5,
      totalProfit: 250,
    },
    {
      name: "Plan B",
      price: "₹2500",
      tasks: 100,
      ratePerTask: 50,
      totalProfit: 5000,
    },
    {
      name: "Plan C",
      price: "₹5000",
      tasks: 150,
      ratePerTask: 100,
      totalProfit: 15000,
    },
    {
      name: "Plan D",
      price: "₹10,000",
      tasks: 200,
      ratePerTask: 150,
      totalProfit: 30000,
    },
  ];

  return (
    <div id="plan" className="plans-comparison">
      <h2 className="plans-title">Choose the Best Plan for You</h2>
      <div className="plans-wrapper">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">{plan.price}</div>
            <ul className="plan-details">
              <li>
                <strong>{plan.tasks}</strong> tasks
              </li>
              <li>
                ₹<strong>{plan.ratePerTask}</strong> per task
              </li>
              <li>
                Total Profit: ₹<strong>{plan.totalProfit}</strong>
              </li>
            </ul>
            <button className="select-plan-btn">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansComparison;
