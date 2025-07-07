'use client';

import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  useForm,
  type UseFormRegister,
  type FieldErrors,
} from 'react-hook-form';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
} from 'react-icons/fa';

// Form data type
type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    console.log('Submitted data:', data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
      console.error('Error sending form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-background to-background/80 dark:from-dark dark:to-dark-deeper">
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-deeper dark:to-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 gradient-text">
              Get in{' '}
              <span className="text-primary-dark dark:text-primary-light font-extrabold relative inline-block">
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
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ContactCard
              icon={<FaMapMarkerAlt className="text-primary text-2xl" />}
              title="Our Location"
              content={`B-142, Akshata SoC., Near Water Tank, Karelibaug, Vadodara\nGujarat, India 390018`}
            />
            <ContactCard
              icon={<FaPhone className="text-primary text-2xl" />}
              title="Call Us"
              content={'+91 94080 24882'}
            />
            <ContactCard
              icon={<FaEnvelope className="text-primary text-2xl" />}
              title="Email Us"
              content={`info@nemizentech.com\nsupport@nemizentech.com`}
            />
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-dark rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <h2 className="text-2xl font-bold font-poppins mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-white py-2 px-6 rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <InputField
                    label="Your Name *"
                    id="name"
                    register={register}
                    errors={errors}
                    required
                  />
                  <InputField
                    label="Your Email *"
                    id="email"
                    register={register}
                    errors={errors}
                    required
                    type="email"
                  />
                  <InputField
                    label="Phone Number"
                    id="phone"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Subject *"
                    id="subject"
                    register={register}
                    errors={errors}
                    required
                  />
                  <InputField
                    label="Your Message *"
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    type="textarea"
                  />
                  {submitError && <p className="text-red-500">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.4049432870997!2d73.20722408858826!3d22.3230286449176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6ae9d65a8b%3A0x7c7be8468b7cbf15!2s142%2C%20Anand%20Nagar%20Rd%2C%20Dipika%20Society%2C%20Saikrupa%20society%2C%20Bapunagar%2C%20Vadodara%2C%20Gujarat%20390018!5e0!3m2!1sen!2sin!4v1751896235734!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NemiZen Technology Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  content,
}: {
  icon: ReactNode;
  title: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg text-center"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{content}</p>
    </motion.div>
  );
}

function InputField({
  label,
  id,
  register,
  errors,
  required,
  type = 'text',
}: {
  label: string;
  id: keyof FormData;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  required?: boolean;
  type?: string;
}) {
  const isTextarea = type === 'textarea';
  const rules = required ? { required: `${label.replace('*', '').trim()} is required` } : {};

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          {...register(id, rules)}
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg ${
            errors[id] ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={`Enter ${label.replace('*', '').trim().toLowerCase()}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          {...register(id, rules)}
          className={`w-full px-4 py-3 border rounded-lg ${
            errors[id] ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={`Enter ${label.replace('*', '').trim().toLowerCase()}`}
        />
      )}
      {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]?.message as string}</p>}
    </div>
  );
}
