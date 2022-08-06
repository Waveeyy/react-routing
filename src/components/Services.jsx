import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit
        nostrum suscipit ad repellat placeat, quidem ipsa dolorum repudiandae
        esse praesentium accusantium porro laudantium numquam nihil enim quas
        quia eveniet et? Reprehenderit, mollitia commodi quae vel maiores ad
        accusamus aut in quos eligendi delectus amet, pariatur, illo sint
        excepturi enim!
        <Link to="/services/:id">Service Details</Link>
      </p>
    </div>
  );
}

export default Services;
