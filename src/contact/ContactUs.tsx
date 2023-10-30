import React, { useState } from "react";

import "./style.scss";
import request from "../server";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    whom: "",
    user: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await request.post(`messages/653ec7a5431aba00182b8ee2`, formData);
    } finally {
      console.log("s");
    }
    console.log(formData);
  }

  

  return (
    <div className="container">
      <div className="text">Contact us Form</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>title</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              name="whom"
              value={formData.whom}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>whom</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>phoneNumber or Email Address</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <div className="underline"></div>
            <label>Write your message</label>
            <br />
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
