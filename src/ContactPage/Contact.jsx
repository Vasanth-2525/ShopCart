import React, { useRef, useState } from "react";
import PageHeader from "../Component/PageHeader";
import emailjs from "@emailjs/browser";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632, 02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mz7jgpn", "template_5yekup8", form.current, {
        publicKey: "isAR5Sy8Y4PABFBmC",
      })
      .then(
        () => {
          setShowAlert(true);
          form.current.reset();

          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <PageHeader title="Get in touch with us" curPage="Contact us" />

      <div className="bg-orange-50 px-[5%]">
        <div className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 uppercase text-sm font-semibold mb-2">
              {subTitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Google Map */}
            <div className="lg:col-span-2 w-full h-96">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8835487708443!2d-73.971248!3d40.7982136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f630443e3be7%3A0xa8652506a7b80d58!2sHI%20New%20York%20City%20Hostel!5e0!3m2!1sen!2sus!4v1682731466014!5m2!1sen!2sus"
                className="w-full h-full border-10 border-white shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {contactList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-5 bg-white shadow-md"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="w-10 h-10 object-contain mr-4 mt-1"
                  />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto mt-20 pb-28">
        <div className="text-center mb-10">
          <p className="text-orange-500 uppercase text-sm font-semibold mb-2">
            Get in touch with contact us
          </p>
          <h3 className="text-2xl md:text-3xl font-bold leading-snug">
            Fill The Form Below So We Can Get To Know <br />
            You And Your Needs Better.
          </h3>
        </div>

        {/* Success Alert */}
        {showAlert && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative shadow-lg">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">
                {" "}
                Message sent successfully.
              </span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
                onClick={() => setShowAlert(false)}
              >
                <svg
                  className="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 5.652a1 1 0 0 0-1.414 0L10 8.586 7.066 5.652a1 1 0 1 0-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 1 0 1.414 1.414L10 11.414l2.934 2.934a1 1 0 0 0 1.414-1.414L11.414 10l2.934-2.934a1 1 0 0 0 0-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 p-2 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name *"
            className="p-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email *"
            className="p-4 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Mobile Number *"
            className="p-4 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject *"
            className="p-4 border border-gray-300 rounded"
            required
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="md:col-span-2 p-4 border border-gray-300 rounded"
            required
          ></textarea>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
