import React, { useRef, useState, useEffect } from "react";
import emailjs, { init } from "@emailjs/browser";
import { Send } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // CONFIGURATION: Replace these with your own EmailJS credentials
    const serviceId = "service_jn5vxdy";
    const templateId = "template_7w2rg2m"; // Note: This must be your Template ID, not your Service ID
    const publicKey = "pFMwGBjxaPNjZGVqC";

    // Initialize with public key
    init(publicKey);

    emailjs
      .send(serviceId, templateId, formData)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("SUCCESS");
          setFormData({
            user_name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("ERROR");
        },
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160914!2d72.741097!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713330000000!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="form-input"
              placeholder="Full name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-input"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="email"
            style={{ marginBottom: "25px" }}
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            id="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="form-btn" type="submit" disabled={isSending}>
            <Send size={18} />
            <span>{isSending ? "Sending..." : "Send Message"}</span>
          </button>

          {status === "SUCCESS" && (
            <p style={{ color: "var(--accent)", marginTop: "15px" }}>
              Message sent successfully!
            </p>
          )}
          {status === "ERROR" && (
            <p style={{ color: "var(--error)", marginTop: "15px" }}>
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </section>
    </article>
  );
};

export default Contact;
