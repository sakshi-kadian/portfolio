import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10 text-[#8C5D5D]">
          CONTACT ME
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#8C5D5D] hover:bg-[#704848] px-6 py-2 rounded text-white transition"
          >
            Send Message
          </button>

          {isSubmitted && (
            <p className="mt-4 text-white-400 text-sm font-medium">
              Thanks! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
