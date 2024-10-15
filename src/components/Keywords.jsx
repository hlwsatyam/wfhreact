import React from "react";
import "./Keywords.css"; // External CSS for styling

const Keywords = () => {
  const regionalKeywords = [
    "Work from home jobs in Guwahati",
    "Part-time jobs from home in Kochi",
    "Earn money from home in Raipur",
    "Remote jobs in Jodhpur for part-time",
    "Online work from home in Vijayawada",
    "Flexible part-time jobs in Surat",
    "Online jobs in Vadodara for part-time",
    "Part-time remote work in Mysore",
    "Home-based jobs in Ludhiana",
    "Online jobs from home in Trivandrum",
  ];

  const tierKeywords = ["Work from home opportunities in Jaipur"];

  const metroKeywords = [
    "Work from home jobs in Mumbai",
    "Part-time jobs from home in Delhi",
    "Online jobs in Bangalore for part-time",
    "Remote work opportunities in Chennai",
    "Earn money from home in Kolkata",
    "Home-based jobs in Hyderabad",
    "Flexible work from home jobs in Pune",
    "Part-time remote jobs in Ahmedabad",
    "Part-time online jobs in Lucknow",
    "Earn from home in Bhubaneswar",
    "Remote jobs in Indore for part-time",
    "Work from home jobs in Nagpur",
    "Home-based part-time jobs in Chandigarh",
    "Online jobs from home in Patna",
    "Flexible work from home in Coimbatore",
    "Part-time remote jobs in Visakhapatnam",
    "Online part-time jobs in Ranchi",
  ];

  const relatedKeywords = [
    "Remote job openings",
    "Best part-time work from home jobs",
    "Legitimate work from home opportunities",
    "How to earn money online from home",
    "Remote work for extra income",
    "Flexible part-time remote work",
    "High-paying work from home jobs",
    "Work from home jobs with no experience needed",
    "Online part-time jobs for students",
    "Side income from home",
    "Easy work from home jobs for beginners",
    "Virtual assistant jobs",
  ];

  const mainKeywords = [
    "Work from home jobs",
    "Part-time jobs from home",
    "Earn money online",
    "Remote jobs for part-time",
    "Flexible work from home",
    "Freelance work from home",
    "Online jobs for part-time",
    "Home-based job opportunities",
    "Part-time remote jobs",
    "Work from home opportunities",
    "Online data entry jobs",
    "Part-time telecalling jobs",
    "Home-based customer service jobs",
    "Flexible online work",
    "Freelance opportunities from home",
    "Remote sales jobs",
    "Online lead generation jobs",
    "Earn from home part-time",
  ];

  // Function to render keyword lists
  const renderKeywords = (title, keywords) => (
    <div className="keyword-section">
      <h3>{title}</h3>
      <div className="keyword-grid">
        {keywords.map((keyword, index) => (
          <div key={index} className="keyword-card">
            {keyword}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="keywords-container">
      {renderKeywords("Regional City Keywords", regionalKeywords)}
      {renderKeywords("Tier 2 & Tier 3 Cities", tierKeywords)}
      {renderKeywords("Major Metro Cities", metroKeywords)}
      {renderKeywords("Related Keywords", relatedKeywords)}
      {renderKeywords("Main Keywords", mainKeywords)}
    </div>
  );
};

export default Keywords;
