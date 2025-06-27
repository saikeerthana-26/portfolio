import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5vm2xnp",
        "template_oxcaqg8",
        form.current,
        "Xvj14OaZtpfOUKzql"
      ).then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px:[7vw] lg:px:[20vw]"
    >
      <ToastContainer />
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-teal-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Open to Collaborations, Ideas, and Opportunities — Let’s Talk!
        </p>
      </div>

      {/* Contact Form */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>
          Connect with me
        </h3>
        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input
            type="email"
            name='user_email'
            placeholder='Your Email'
            required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500'
          />
          <input
            type="text"
            name='user_name'
            placeholder='Your Name'
            required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500'
          />
          <input
            type="text"
            name='subject'
            placeholder='Subject'
            required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500'
          />
          <textarea
            name="message"
            placeholder='Message'
            rows='4'
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500'
          ></textarea>

          {/* Send Button */}
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 
             py-3 text-white font-semibold rounded-md transition-all duration-300 
             hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(20,184,166,0.5)]'
          >
            Send
          </button>


        </form>
      </div>
    </section>
  );
};

export default Contact;
