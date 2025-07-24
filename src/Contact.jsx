import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact() {
   useEffect(() => {
    document.title = "Contact";
  }, []);
  const [form, setForm] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
   
  }

  return (
    <div className="contact mb-4">
      <div className="container pt-3">
        <div className="contact-header text-center pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            contact section
          </h2>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>
        <form action="" className="w-50 p-3 mx-auto mt-5">
          <div className="mb-4 position-relative">
            <input
              id="userName"
              type="text"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative"
              value={form.userName}
              onChange={handleInputChange}
              
            />
            <label
              htmlFor="userName"
              className={`position-absolute start-0 transition-all ${
                form.userName ? "float-label" : ""
              }`}
              style={{
                left: "10px",
                top: form.userName ? "-18px" : "14px",
                fontSize: form.userName ? "0.85em" : "1em",
                color: form.userName ? "#1abc9c" : "#888",
                background: form.userName ? "#fff" : "transparent",
                padding: form.userName ? "0 4px" : "0",
                pointerEvents: "none",
                transition: "all 0.2s",
              }}
            >
              userName
            </label>
          </div>

          <div className="mb-4 position-relative">
            <input
              id="userAge"
              type="text"
              name="userAge"
              className="form-control border-0 border-bottom py-3 position-relative"
              value={form.userAge}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <label
              htmlFor="userAge"
              className={`position-absolute start-0 transition-all ${
                form.userAge ? "float-label" : ""
              }`}
              style={{
                left: "10px",
                top: form.userAge ? "-18px" : "14px",
                fontSize: form.userAge ? "0.85em" : "1em",
                color: form.userAge ? "#1abc9c" : "#888",
                background: form.userAge ? "#fff" : "transparent",
                padding: form.userAge ? "0 4px" : "0",
                pointerEvents: "none",
                transition: "all 0.2s",
              }}
            >
              userAge
            </label>
          </div>

          <div className="mb-4 position-relative">
            <input
              id="userEmail"
              type="text"
              name="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative"
              value={form.userEmail}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <label
              htmlFor="userEmail"
              className={`position-absolute start-0 transition-all ${
                form.userEmail ? "float-label" : ""
              }`}
              style={{
                left: "10px",
                top: form.userEmail ? "-18px" : "14px",
                fontSize: form.userEmail ? "0.85em" : "1em",
                color: form.userEmail ? "#1abc9c" : "#888",
                background: form.userEmail ? "#fff" : "transparent",
                padding: form.userEmail ? "0 4px" : "0",
                pointerEvents: "none",
                transition: "all 0.2s",
              }}
            >
              userEmail
            </label>
          </div>

          <div className="mb-4 position-relative">
            <input
              id="userPassword"
              type="text"
              name="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative"
              value={form.userPassword}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <label
              htmlFor="userPassword"
              className={`position-absolute start-0 transition-all ${
                form.userPassword ? "float-label" : ""
              }`}
              style={{
                left: "10px",
                top: form.userPassword ? "-18px" : "14px",
                fontSize: form.userPassword ? "0.85em" : "1em",
                color: form.userPassword ? "#1abc9c" : "#888",
                background: form.userPassword ? "#fff" : "transparent",
                padding: form.userPassword ? "0 4px" : "0",
                pointerEvents: "none",
                transition: "all 0.2s",
              }}
            >
              userPassword
            </label>
          </div>

          <button className="btn mt-4 text-white" onClick={submit}> send Message </button>
        </form>
       
      </div>
    </div>
  );
}
