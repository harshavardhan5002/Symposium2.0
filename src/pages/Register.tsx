import React, { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSubmitted(true); // Set the submission state to true
  };

  const handleDialogClose = () => {
    setIsSubmitted(false); // Close the dialog
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center">
      <div className="max-w-lg w-full bg-black/50 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">
            Register Now
          </h1>
        </motion.div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-teal-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg p-1"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-teal-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg p-1"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-teal-400">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg p-1"
              required
            />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium text-teal-400">
              College
            </label>
            <input
              type="text"
              id="college"
              className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg p-1"
              required
            />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-teal-400">
              Department
            </label>
            <input
              type="text"
              id="department"
              className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg p-1"
              required
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-teal-400">
              Year of Study
            </label>
            <input
              type="text"
              id="year"
              className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg p-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-teal-400">
              Select Event(s):
            </label>
            <div className="space-y-2">
              {["Event 1", "Event 2", "Event 3", "Event 4", "Event 5", "Event 6"].map(
                (event, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-900 border border-gray-700 rounded-md flex items-center justify-center">
                      <input
                        type="checkbox"
                        id={`event${index + 1}`}
                        className="appearance-none w-full h-full cursor-pointer rounded-md focus:ring-teal-500 checked:bg-teal-500"
                      />
                    </div>
                    <label
                      htmlFor={`event${index + 1}`}
                      className="text-white cursor-pointer"
                    >
                      {event}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-teal-400 to-teal-600 text-black font-bold rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform"
            >
              Slide to Submit
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully!</h2>
            <p>Thank you for registering. We will get back to you soon.</p>
            <button
              onClick={handleDialogClose}
              className="mt-4 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
