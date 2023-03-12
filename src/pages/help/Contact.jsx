import React from "react";

function Contact(props) {
  return (
    <div className="contact">
      <h3>Contact us</h3>
      <form>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <input type="message" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
