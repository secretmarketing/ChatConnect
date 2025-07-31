// components/ContactForm.tsx
'use client';

import { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define the shape of the form data to match your form's fields
interface FormData {
  name: string;
  email: string;
  phone: string;
  industry: string;
  painPoint: string;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    industry: '',
    painPoint: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState(''); // To display messages to the user

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle'); // Reset status on new submission
    setResponseMessage(''); // Clear previous messages

    try {
      // IMPORTANT: Replace 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE' with your actual deployed URL
      // You will get this URL after deploying your Google Apps Script (see instructions below).
      const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbzKthtc9B-n0_7HgHsHVDRdAdBk7rxFEpSyZXwMXEePtwKZpO5WG1xLyfLBMR4JVTIS/exec'; 

      // Add timestamp to formData before sending
      const dataToSend = {
        timestamp: new Date().toLocaleString(), // Format timestamp for readability in sheet
        ...formData
      };

      const response = await fetch(googleAppsScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Google Apps Script expects this content type for e.parameter
        },
        // Convert dataToSend to URL-encoded string
        body: new URLSearchParams(dataToSend as Record<string, string>).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setResponseMessage('Your consultation request has been sent successfully!');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            industry: '',
            painPoint: ''
          });
          setSubmitStatus('idle');
          onClose(); // Close the modal after successful submission and reset
        }, 2000); // Wait 2 seconds before closing and resetting
        
      } else {
        setSubmitStatus('error');
        const errorText = await response.text(); // Get raw error text from Apps Script
        setResponseMessage(`Failed to send request: ${errorText || 'Unknown error'}. Please try again.`);
        console.error('Google Apps Script response error:', response.status, errorText);
      }
    } catch (error) {
      setSubmitStatus('error');
      setResponseMessage('An unexpected error occurred. Please check your internet connection.');
      console.error('Form submission network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get Started FREE Today!</h2>
              <p className="text-green-100">Transform your WhatsApp customer engagement in minutes</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Form */}
        <form id="chatconnect-contact-form" onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
              <div className="flex items-center">
                <i className="ri-check-circle-line text-green-500 text-xl mr-3"></i>
                <div>
                  <h3 className="font-semibold">Success!</h3>
                  <p className="text-sm">{responseMessage}</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
              <div className="flex items-center">
                <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                <div>
                  <h3 className="font-semibold">Error</h3>
                  <p className="text-sm">{responseMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="+60 12-345-6789"
            />
          </div>

          {/* Industry Field */}
          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
              Industry *
            </label>
            <div className="relative">
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none pr-8"
              >
                <option value="">Select your industry</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Spa & Beauty">Spa & Beauty</option>
                <option value="Healthcare & Clinic">Healthcare & Clinic</option>
                <option value="Restaurant & F&B">Restaurant & F&B</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Education">Education</option>
                <option value="Retail">Retail</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
                <i className="ri-arrow-down-s-line text-gray-400"></i>
              </div>
            </div>
          </div>

          {/* Pain Point Field */}
          <div>
            <label htmlFor="painPoint" className="block text-sm font-semibold text-gray-700 mb-2">
              What pain point will this service cover for your business? *
            </label>
            <textarea
              id="painPoint"
              name="painPoint"
              value={formData.painPoint}
              onChange={handleInputChange}
              required
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
              rows={4}
              placeholder="Describe your main challenge (e.g., slow response times, high customer service costs, missed opportunities, etc.)"
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.painPoint.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  Processing...
                </div>
              ) : submitStatus === 'success' ? (
                <div className="flex items-center justify-center">
                  <i className="ri-check-line mr-2"></i>
                  Success!
                </div>
              ) : (
                'Get My FREE Consultation'
              )}
            </button>
          </div>

          {/* Footer Text */}
          <div className="text-center text-sm text-gray-500 pt-2">
            <p className="flex items-center justify-center mb-2">
              <i className="ri-shield-check-line text-green-500 mr-2"></i>
              Your information is secure and will never be shared
            </p>
            <p>💳 No Credit Card Required • 🚀 Setup in 15 Minutes • ✅ Cancel Anytime</p>
          </div>
        </form>
      </div>
    </div>
  );
}
