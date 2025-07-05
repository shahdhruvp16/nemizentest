'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

// Form data type
type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  // Form state
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Note: In a real implementation, you would replace these with your actual EmailJS credentials
      // For demo purposes, we're simulating a successful submission
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   data,
      //   'YOUR_USER_ID'
      // );

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-background to-background/80 dark:from-dark dark:to-dark-deeper">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-deeper dark:to-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-primary/20 animate-pulse-slow"></div>
            <div className="absolute top-40 right-20 w-24 h-24 rounded-full border-4 border-accent/30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border-4 border-primary/20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full border-2 border-accent/20 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 gradient-text">
              Get in <span className="text-primary-dark dark:text-primary-light font-extrabold relative inline-block">
                Touch
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full"
                  initial={{ width: 0, left: '50%' }}
                  animate={{ width: '100%', left: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Have a question or want to work together? Our team is ready to assist you with any inquiries about our services and solutions.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Available 24/7
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Quick Response
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Expert Support
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg hover:shadow-xl card-hover border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner transform hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-2">Our Location</h3>
              <p className="text-gray-600 dark:text-gray-300">B-142, Akshata SoC., Near Water Tank, Karelibaug, Vadodara<br />Gujarat, India 390018</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg hover:shadow-xl card-hover border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner transform hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">+91 94080 24882</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg hover:shadow-xl card-hover border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner transform hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">info@nemizentech.com<br />support@nemizentech.com</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-dark rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 relative z-10"
            >
              <h2 className="text-2xl font-bold font-poppins mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/10 border border-green-200 dark:border-green-800/30"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    >
                      <FaCheckCircle className="text-green-500 text-5xl" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold font-poppins mb-4">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="gradient-bg text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 border rounded-lg input-focus dark:bg-dark-deeper dark:border-gray-700 transition-all duration-200 hover:border-primary/50 ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 border rounded-lg input-focus dark:bg-dark-deeper dark:border-gray-700 transition-all duration-200 hover:border-primary/50 ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                        placeholder="john@example.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus dark:bg-dark-deeper dark:border-gray-700 transition-all duration-200 hover:border-primary/50"
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className={`w-full px-4 py-3 border rounded-lg input-focus dark:bg-dark-deeper dark:border-gray-700 transition-all duration-200 hover:border-primary/50 ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                        placeholder="How can we help you?"
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg input-focus dark:bg-dark-deeper dark:border-gray-700 transition-all duration-200 hover:border-primary/50 ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                      placeholder="Write your message here..."
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                      {submitError}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 gradient-bg text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 relative z-10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.4158567536039!2d73.20747036909988!3d22.323391411160987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6ae9d65a8b%3A0x7c7be8468b7cbf15!2s142%2C%20Anand%20Nagar%20Rd%2C%20Dipika%20Society%2C%20Saikrupa%20society%2C%20Bapunagar%2C%20Vadodara%2C%20Gujarat%20390018!5e0!3m2!1sen!2sin!4v1751740475932!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NemiZen Technology Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 mt-12 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 dark:from-dark-deeper dark:via-dark-deeper dark:to-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-poppins mb-4 gradient-text">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how NemiZen Technology can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+919408024882"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2"
              >
                <FaPhone /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919408024882"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}