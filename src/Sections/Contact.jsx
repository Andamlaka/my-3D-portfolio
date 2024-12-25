import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setLoading(true);

    try {
      await emailjs.send(
        'service_wejslow', // Replace with your EmailJS service ID
        'template_r9iutzx', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: 'Andargachew', // Replace with the recipient's name
          from_email: form.email,
          to_email: 'andargachweewawey@gmail.com', // Replace with the recipient's email
          message: form.message,
        },
        'WyLfsUwIV2Wp4vup8' // Replace with your EmailJS public key
      );

      setLoading(false);
      alert('Your message has been sent successfully!');
    
      setForm({ name: '', email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('EmailJS Error:', error); // Log the error for debugging
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-7"
          >
            {/* Name Field */}
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your Name"
              />
            </label>

            {/* Email Field */}
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your Email"
              />
            </label>

            {/* Message Field */}
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I am gonna give you a job..."
              />
            </label>

            {/* Submit Button */}
            <button
              className="field-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
