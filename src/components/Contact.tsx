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
    <section id="contact" className="w-full bg-[#22014b] text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#3b0a75] rounded-2xl p-8 shadow-lg">

        {/* Left side: Contact Info */}
      <div className="flex flex-col justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            I&rsquo;d love to hear from you! Feel free to reach out using the form or contact info below.
          </p>

          {/* Inserted Image */}
          <div className="w-full flex justify-center my-6">
          <img
            src="/contact_us.png"
            alt="Contact Icon"
            className="w-60 h-60 object-contain mx-auto drop-shadow-xl"
          />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p><span className="font-semibold text-purple-300">Email:</span> abhinavgopinadh@gmail.com</p>
          <p><span className="font-semibold text-purple-300">Phone:</span> +91 8590353527</p>
        </div>
      </div>


        {/* Right side: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-white text-black"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 h-32 rounded-md bg-white text-black"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Send
          </button>
        </form>

      </div>
    </section>
  );

};

export default Contact;
