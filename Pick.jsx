import React from 'react';
import './website.css'; // Make sure website.css exists in the same folder

const Pick = () => {
  return (
    <>
      <div className="row">
        <div className="box">
          <img
            src="img1.jpeg"
            alt="Welding Workshop"
          />
        </div>
        <div className="box">
          <img
            src="img2.webp"
            alt="Welding Tools"
          />
        </div>
        <div className="box">
          <img
            src="img3.webp"
            alt="Inverter Welding Machine"
          />
        </div>
      </div>
    </>
  );
};

export default Pick;
