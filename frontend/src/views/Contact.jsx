import React, { useState, useEffect, useRef } from 'react';
import { CiPaperplane } from "react-icons/ci";
import mailIcon from '../media/mailIcon.gif'; 
import '../styling/fade.css';

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
  const sectionsRef = useRef([]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Email is not valid';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData.projectDetails) newErrors.projectDetails = 'Project details are required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus('Please fill in all required fields');
      return;
    }
    setStatus('Sending...');

    const response = await fetch('https://formspree.io/f/mdknnene', {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current
        .filter(section => section !== null)
        .forEach(section => observer.unobserve(section));
    };
  }, []);
  
  return (
    <div className="px-2 py-20 lg:p-10 md:px-96 w-full  " style={{ textShadow: '6px 6px 4px rgba(0,0,0,0.5)' }} >
      <div className="hover:shadow-glow fade-in" ref={el => sectionsRef.current.push(el)}>
        <div className="w-full lg:px-10 px-3 mx-auto text-center  ">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient3">Contact</h2>
          <p className="text-base md:text-lg text-gray mb-8">I'm looking forward to hearing from you</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="justify-items-center px-5 lg:px-10 py-10 rounded-sm max-w-3xl mx-auto flex-grow">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm text-black py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="Tony"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red text-xs italic">{errors.firstName}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className="form-control text-black appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Stark"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red text-xs italic">{errors.lastName}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="form-control text-black appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="country"
                    name="country"
                    type="text"
                    placeholder="USA"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && <p className="text-red text-xs italic">{errors.country}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="form-control text-black appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="IronMan@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red text-xs italic">{errors.email}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="company-name">
                    Company Name
                  </label>
                  <input
                    className="form-control text-black appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="company-name"
                    name="companyName"
                    type="text"
                    placeholder="Your Company"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && <p className="text-red text-xs italic">{errors.companyName}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="service-type">
                    Service Type
                  </label>
                  <select
                    className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 text-gray rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="service-type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="frontend">Frontend Services</option>
                    <option value="backend">Backend Services</option>
                    <option value="fullstack">Full Stack Services</option>
                  </select>
                  {errors.serviceType && <p className="text-red text-xs italic">{errors.serviceType}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gradient3 text-xs font-bold mb-2" htmlFor="project-details">
                    More Details About the Project
                  </label>
                  <textarea
                    className="form-control text-black no-resize appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="project-details"
                    name="projectDetails"
                    placeholder="Brief Summary, Timeline, Goals, & etc."
                    value={formData.projectDetails}
                    onChange={handleChange}
                  ></textarea>
                  {errors.projectDetails && <p className="text-red text-xs italic">{errors.projectDetails}</p>}
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg border-black font-semibold rounded-sm border bg-gradient-to-br focus:outline-none text-white flex justify-center items-center"
                  >
                    Send
                    <CiPaperplane className="w-6 h-6 ml-2" />
                  </button>
                  {status && <p className={`text-base italic mt-2 ${status.includes('error') ? 'text-red' : 'text-gradient3'}`}>{status}</p>}
                  {successMessage && <p className="text-green text-base italic mt-2">{successMessage}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
