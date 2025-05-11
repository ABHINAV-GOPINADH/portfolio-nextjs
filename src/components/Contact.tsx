"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-desc">I’d love to hear from you!</p>
          <div className="contact-info-details">
            <p>Email: your@email.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-input"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
