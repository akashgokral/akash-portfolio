import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container-fluid contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>Akashgokral1@gmail.com</h5>
            <a href="mailto:akashgokral1@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Akash Gokral</h5>
            <a href="https://m.me/akashgokral" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>7028353526</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7028353526"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email "
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            autoComplete="off"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
