import React, { useState } from "react";
import "./ContactUs.css"; // Ensure this file exists
import photographerImage from "../../assets/ProfilePhoto.jpg"; // Add an image to your assets folder

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! 📩");
    setFormData({ name: "", phone: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      <div className="contact-row">
        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out with any questions or inquiries.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Photographer's Info Section */}
        <div className="photographer-info">
          <img src={photographerImage} alt="Photographer" className="photographer-image" />
          <h3>Bhargav Pillalamarri</h3>
          <p>Professional Photographer specializing in wedding, baby shoots, and pre-wedding photography. Capturing moments that last a lifetime. 📷✨</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
