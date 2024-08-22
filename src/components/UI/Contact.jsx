import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in Touch
        </h2>
        <div className="md:flex justify-between items-start">
          {/* Map Section */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.08021448703!2d78.08162399492744!3d9.917918886731767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1724319971765!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Contact Form Section */}
          <div className="w-full mt-8 md:mt-0 md:w-1/2 lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 rounded-[8px]">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-300"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-300"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-300"
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
