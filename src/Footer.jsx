import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="card-group mt-4 bg-transparent">
          <div className="card border-0 text-white bg-transparent">
            <div className="card-body text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="card border-0 text-white bg-transparent">
            <div className="card-body text-center">
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <span>
                  <i className="fa-brands fa-facebook mx-1 icon"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter mx-1 icon"></i>
                </span>
                <span>
                  <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                </span>
                <span>
                  <i className="fa-solid fa-globe mx-1 icon"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="card border-0 text-white bg-transparent">
            <div className="card-body text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-white text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
