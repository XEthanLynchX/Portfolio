import React, { useState } from 'react';
import { CiPaperplane } from "react-icons/ci";
import mailIcon from '../media/mailIcon.gif'; // Ensure you have the correct path to your mail icon image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    companyName: '',
    serviceType: '',
    projectDetails: ''
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const response = await fetch('https://formspree.io/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Message sent!');
      setFormData({
        firstName: '',
        lastName: '',
        country: '',
        email: '',
        companyName: '',
        serviceType: '',
        projectDetails: ''
      });
      setSuccessMessage('Message sent successfully!');
    } else {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="px-2 py-20 lg:p-10 md:px-96 w-full ">
      <div className="w-full lg:px-10 px-3 mx-auto text-left ml-10 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient3  ">Contact</h2>
        <p className="text-base md:text-lg text-gray mb-8 ">I'm looking forward to hearing from you</p>
      </div>
  
      

      <div className="max-w-7xl mx-auto hover:shadow-glow">
        <div className="justify-items-center px-5 lg:px-10 py-10 rounded-sm max-w-3xl mx-auto flex-grow">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="first-name">
                  First Name
                </label>
                <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="first-name" name="firstName" type="text" placeholder="Tony" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="last-name">
                  Last Name
                </label>
                <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="last-name" name="lastName" type="text" placeholder="Stark" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="country">
                  Country
                </label>
                <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="country" name="country" type="text" placeholder="USA" value={formData.country} onChange={handleChange} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="email" name="email" type="email" placeholder="IronMan@email.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="company-name">
                  Company Name
                </label>
                <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="company-name" name="companyName" type="text" placeholder="Your Company" value={formData.companyName} onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="service-type">
                  Service Type
                </label>
                <select className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 text-gray rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="service-type" name="serviceType"  value={formData.serviceType} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="frontend">Frontend Services</option>
                  <option value="backend">Backend Services</option>
                  <option value="fullstack">Full Stack Services</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="project-details">
                  More Details About the Project
                </label>
                <textarea className="form-control no-resize appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none" id="project-details" name="projectDetails" placeholder="Brief Summary, Timeline, Goals, & etc." value={formData.projectDetails} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="w-full">
                <button type="submit" className="w-full px-4 py-3 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg border-black font-semibold rounded-sm border bg-gradient-to-br focus:outline-none text-white flex justify-center items-center">
                  Send
                  <CiPaperplane className="w-6 h-6 ml-2" />
                </button>
                {successMessage && <p className="text-green text-xl italic mt-2">{successMessage}</p>}
              </div>
            </div>
            {status && <p className="mt-4 text-red">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
