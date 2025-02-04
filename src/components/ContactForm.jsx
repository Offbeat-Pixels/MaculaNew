import React, { useState } from "react";
import { styles } from "../style";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Replace YOUR_WEB_APP_URL with the Web App URL from Google Apps Script
      const webAppUrl = import.meta.env.VITE_WEB_APP_URL;
       

      const params = new URLSearchParams(formData);
     

      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(), // Send the form data as URLSearchParams
      });

      if (response.ok) {
        setResponseMessage("Your message has been successfully submitted!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage(
          "There was an error submitting your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage(
        "There was an error submitting your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-fit  p-4 md:p-8 lg:p-12 md:bg-contact-pattern bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mt-10 md:mt-0 md:pl-14 shadow-none">
        <div className="p-0">
          <p
            className={`${styles.sectionHeadText} text-[3rem] bg-transparent bg-opacity-50 rounded-lg`}
          >
            Let's <span className="italic">Talk</span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border mt-10 bg-white rounded-lg mr-auto lg:w-1/2 p-5"
          >
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="Phone number">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 transition-colors"
                required
              />
            </div>
            <label htmlFor="Message">Message</label>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 resize-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-green-600">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
