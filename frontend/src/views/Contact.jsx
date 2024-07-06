import React, { useState, useEffect, useRef } from 'react';
import { CiPaperplane } from "react-icons/ci"; 
import mail from '../media/mail.svg'; // Make sure to replace this with the actual path to your image
import '../styling/fade.css';
import '../styling/contactform.css'; // Import your CSS file for additional styling
import FreqQuestions from '../components/FreqQuestions'; // Make sure to replace this with the actual path to your component

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
    <div className="px-2 py-20 lg:p-10 w-screen">
      <div className="fade-in" ref={el => sectionsRef.current.push(el)}>
        <div className="flex flex-col lg:flex-row w-full lg:px-10 px-3 mx-auto text-left lg:text-left">
          <div className="lg:w-1/2 w-full lg:pr-10 ">

            <p className="text-sm md:text-base text-gray  ">Contact Me</p>
            <h2 className="text-type md:text-2xl font-bold text-white mb-8 w-full md:w-4/5">Feel Free to <span className='text-gradient3'>get in touch</span> with me</h2>
            
            <form className="w-full md:w-2/3 " onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="form-control appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 text-white py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red text-xs italic">{errors.firstName}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  
                  <input
                    className="form-control text-white appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red text-xs italic">{errors.lastName}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                 
                  <input
                    className="form-control text-white appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && <p className="text-red text-xs italic">{errors.country}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  
                  <input
                    className="form-control text-white appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red text-xs italic">{errors.email}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                 
                  <input
                    className="form-control text-white appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none"
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
                 
                  <select
                    className="form-control appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 text-gray rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="service-type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Basic">Basic Package</option>
                    <option value="Standard">Standard Package</option>
                    <option value="Premium">Premium Package</option>
                    <option value="Custom">Custom Package</option>
                  </select>
                  {errors.serviceType && <p className="text-red text-xs italic">{errors.serviceType}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                 
                  <textarea
                    className="form-control text-white no-resize appearance-none block w-full text-gray-600 bg-transparent border-b-2 border-white focus:border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="project-details"
                    name="projectDetails"
                    placeholder="More Details About the Project"
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
                    className="w-full h-1/2 px-4 py-1 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg font-semibold rounded-sm border  text-white flex justify-center items-center btn-gradient3"
                  >
                    Send
                    <CiPaperplane className="w-6 h-6 ml-2" />
                  </button>
                  {status && <p className={`text-base italic mt-2 ${status.includes('error') ? 'text-red' : 'text-gradient3'}`}>{status}</p>}
                  
                </div>
              </div>
            </form>
          </div>
          <div className="hidden md:flex lg:w-1/3 w-full items-center justify-center lg:pl-10">
            <img src={mail} alt="Mail Icon" className="w-full h-auto" />
          </div>
        </div>
        <FreqQuestions />
      </div>
    </div>
  );
};

export default ContactForm;
