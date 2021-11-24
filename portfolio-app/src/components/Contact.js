import React, { useState } from "react";
import "../styles/Contact.css";
import { validateEmail } from "../Utils/helpers";
import emailjs from "emailjs-com";

function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageError, setMessgeError] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "contactName") {
      setContactName(inputValue);
    } else if (inputType === "contactEmail") {
      setContactEmail(inputValue);
    } else if (inputType === "contactMessage") {
      setContactMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(contactEmail) || !contactName) {
      setErrorMessage("Name or Email is invalid");
      return;
    }
    if (!contactMessage) {
      setMessgeError("Message is required");
      return;
    }
    const mailOptions = {
      from_name: contactName,
      message: contactMessage,
      reply_to: contactEmail,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        mailOptions,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSentMessage(!sentMessage);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  return (
    <div>
      <div className="row pt-5">
        <h1 className="contact-me">Contact Me</h1>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Name</label>
              <input
                className="form-control"
                value={contactName}
                name="contactName"
                onChange={handleInputChange}
                type="text"
                id="contactName"
              ></input>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                className="form-control"
                value={contactEmail}
                name="contactEmail"
                onChange={handleInputChange}
                type="text"
                id="contactEmail"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                value={contactMessage}
                onChange={handleInputChange}
                name="contactMessage"
                id="contactMessage"
                rows="3"
              ></textarea>
              {messageError && (
                <>
                  <p className="bg-light text-danger rounded col-lg-5 col-9 text-center px-2 my-2">
                    {messageError}
                  </p>
                </>
              )}
            </div>
            <button type="submit" className="btn btn-dark mt-2">
              Send
            </button>
            {sentMessage && (
              <>
                <p className="text-center">Message sent!</p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
