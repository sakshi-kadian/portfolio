import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

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
    <section id="contact" className="bg-[#050505] text-white py-32 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-12"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-[#c084fc] uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Let's work <span className="text-[#d8b4fe]">together.</span>
          </h2>
          <p className="text-gray-400 italic">
            Whether you have a collaboration opportunity, or just want to connect — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 rounded-3xl space-y-6 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:shadow-[0_0_15px_rgba(216,180,254,0.3)] transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:shadow-[0_0_15px_rgba(216,180,254,0.3)] transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Subject</label>
            <input
              type="text"
              name="title"
              required
              className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:shadow-[0_0_15px_rgba(216,180,254,0.3)] transition-all"
              placeholder="What's this about?"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:shadow-[0_0_15px_rgba(216,180,254,0.3)] transition-all resize-none"
              placeholder="Let's discuss your ideas..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c084fc] hover:bg-[#a855f7] text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(216,180,254,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Send Message
            <FiSend className="group-hover:translate-x-1 transition-transform" />
          </button>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[#d8b4fe] font-medium pt-2"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
