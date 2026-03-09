import "./ContactForm.css";
import React from "react";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send A Message To Us!</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
