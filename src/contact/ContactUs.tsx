import React, { useState } from "react";

import "./style.scss";
import request from "../server";
import { toast } from "react-toastify";

interface ContactUsProps {
  userId: string;
  // other prop types
}

const ContactUs: React.FC<ContactUsProps> = ({ userId }) => {
  console.log(userId);
  
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    whom: userId || "653ec7a5431aba00182b8ee2",
    user: "",
    message: "",
  });
  console.log(userId);
  

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
    setLoading(true)
    try {
      await request.post(`messages`, formData);
      toast.success("Success")
    } finally {
      setLoading(false)
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
              <button className="contact-btn" type="submit">{loading ? "loading . . ." : "Submit"}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
