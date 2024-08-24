"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .send(
        "service_y0ic5ia",
        "template_qp299oa",
        {
          from_name: name,
          email_id: email,
          message: message,
        },
        "ON6ROsYPMwrws9HlK"
      )
      .then(
        (result) => {
          toast("message successfully sent");
        },
        (error) => {
          toast("error occured")
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    
  };
  return (
    <section className="contact-section px-10 py-5 flex flex-col gap-y-5">
      <div>
        <iframe
          className="w-full h-[400px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.52246513947!2d77.22261067420743!3d27.20274177647548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973ace46c3b51d7%3A0x874542deaced4c13!2sBailara%2C%20Rajasthan%20321602!5e0!3m2!1sen!2sin!4v1724422932798!5m2!1sen!2sin"
          
        ></iframe>
      </div>
      <div className="contact-form flex flex-col gap-y-5">
        <div className="flex flex-col sm:flex-row gap-y-5 sm:gap-x-5">
          <input
            className="w-full sm:w-3/6 rounded-xl h-[52px] pl-5 text-black border-none"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full sm:w-3/6 rounded-xl h-[52px] pl-5 text-black border-none"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className="rounded-xl pl-5 text-black"
          placeholder="Your Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-500 h-[52px] rounded-xl text-lg text-black"
          onClick={handleSubmit}
          

        >send
        </button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
