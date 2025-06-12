import React, { useState } from "react"; // Ensure `useState` is imported
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import arrow from "../assets/white-arrow.png";

const Form = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted with the following data:\nName: ${formData.name}\nPhone: ${formData.phoneNumber}\nMessage: ${formData.message}`
    );
    // Reset form after submission
    setFormData({
      name: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="w-full h-[90vh] flex justify-center items-center">
      <div className="w-[90%] md:w-4/5 h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-1/5 flex flex-col justify-center items-center">
            <h2 className="text-base">CONTACT US</h2>
            <h2 className="text-3xl font-bold 2xl:text-5xl">Get in Touch</h2>
          </div>
        <div className="w-full h-4/5 flex justify-center items-center">
        <div className="w-1/2 h-3/5 flex flex-col justify-center items-start gap-4 pl-2">
          <h2 className="formMessage flex gap-2 items-center font-bold">Send us a message <MdEmail className="text-3xl text-yellow-600"/></h2>
          <p className="formMessagePara w-4/5">
            Feel free to reach out through our contact form and find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <h3 className="flex gap-2 items-center text-[12px] md:text-[16px]">
            <CgMail /> Contact@hussainbinfazal
          </h3>
          <h3 className="flex gap-2 items-center text-[12px]">
            <FaPhoneVolume /> +01123-498-7688
          </h3>
        </div>
        <div className="w-1/2 h-3/5 flex flex-col justify-center px-4">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="h-[50px] flex flex-col w-full">
              <label
                htmlFor="name"
                className=" text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className=" w-full h-4/5 bg-blue-300 -3 border placeholder:pl-2 border-gray-300 rounded-md"
              />
            </div>

            {/* Phone Number Field */}
            <div className=" h-[50px] flex flex-col mt-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number{" "}
                <FaPhoneVolume className="inline-block ml-1 text-blue-600" />
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
                className="h-4/5 border bg-blue-300 placeholder:pl-2 border-gray-300 rounded-md"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col mt-4">
              <label
                htmlFor="message"
                className=" text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Enter your message"
                onChange={handleInputChange}
                required
                className=" border placeholder:pl-2 bg-blue-300 border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col justify-center mt-4">
              <button
                type="submit"
                className="flex justify-center items-center h-[40px] w-[90%] md:w-2/5 2xl:w-[30%] md:py-3 md:px-4 gap-3 bg-blue-900 text-white rounded-full hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Submit now <img src={arrow} alt="" className="w-[20px] h-[10px]"  />
              </button>
            </div>
          </form>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
