'use client'; // Ensuring this component is client-side

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Heroicons
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // React-icons for LinkedIn and GitHub
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(''); // To manage form submission status

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    // Send email via EmailJS
    try {
      const result = await emailjs.sendForm(
        'service_30ekh96', // Your service ID from EmailJS
        'template_xlauose', // Your template ID from EmailJS
        e.target, // Form element reference
        'uKqFJc7WTwr0kUnKr' // Your EmailJS user ID
      );
      console.log('Email sent:', result.text);
      setFormStatus('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log('Email send error:', error);
      setFormStatus('There was an error submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <div className="flex flex-col items-center justify-center space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold">Contact Me</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            {formStatus === 'Submitting...' ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {/* Display Form Status */}
        {formStatus && (
          <p className="text-center mt-4 text-green-600">{formStatus}</p>
        )}

        {/* Alternative Contact Information */}
        <div className="flex flex-col items-center space-y-4 mt-8">
          <h2 className="text-2xl font-semibold">Alternative Contact</h2>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 tfont-semibold" />
              <a href="mailto:kunalkulthe01@gmail.com" className="font-semibold">
                kunalkulthe01@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 font-semibold" />
              <span className="font-semibold">+91 9604212376</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-6 w-6 font-semibold" />
              <span className="font-semibold">Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://linkedin.com/in/kunal-kulthe-a13a5920a"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-blue-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Kunal726"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center mt-8">
        <Link href="/" className="text-lg text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
