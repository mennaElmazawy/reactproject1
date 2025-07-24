import React from "react";
import logo from "../src/assets/images/avataaars.svg";
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
      document.title = "home";
    }, []);
  return (
    <>
      <div className="home d-flex flex-column justify-content-center align-items-center text-white">
       
         <img src={logo} alt=""/>
       

        <div className="text-center pt-4 text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            start Framework
          </h2>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
