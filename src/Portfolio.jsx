import React, { useEffect, useState } from "react";

import portfolio1 from "../src/assets/images/poert1.png";
import portfolio2 from "../src/assets/images/port2.png";
import portfolio3 from "../src/assets/images/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
          document.title = "portfolio";
        }, []);
        const openOverlay = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  const portfolioImages = [portfolio1, portfolio2, portfolio3];
  return (
   

     <div className="mb-4 portfolio">
      <div className="pt-4 portfolio-header text-center">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          {portfolioImages.concat(portfolioImages).map((img, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="rounded-3 overflow-hidden position-relative"
                onClick={() => openOverlay(img)}
              >
                <img src={img} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      {selectedImage && (
        <div
          className="position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
          style={{ zIndex: 9999 }}
          onClick={closeOverlay}
        >
          <img
            src={selectedImage}
            alt=""
            style={{ width: "600px" }}
          />
        </div>
      )}
    </div>
  
  );
}
