'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Package data
const packages = {
  web: [
    {
      id: 'web-basic',
      name: 'Basic',
      description: 'Perfect for small businesses just getting started online.',
      monthlyPrice: 499,
      yearlyPrice: 4999,
      features: [
        { name: 'Responsive Website (5 pages)', included: true },
        { name: 'Mobile Optimization', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Content Management System', included: false },
        { name: 'E-commerce Functionality', included: false },
        { name: 'Custom Animations', included: false },
        { name: 'Premium Support', included: false },
      ],
      details: [
        'Domain and hosting recommendations',
        '1 month of technical support',
        'Basic analytics setup',
        'One-time content upload',
        'Browser compatibility testing'
      ],
      recommended: false
    },
    {
      id: 'web-pro',
      name: 'Professional',
      description: 'Comprehensive solution for growing businesses with more complex needs.',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        { name: 'Responsive Website (10 pages)', included: true },
        { name: 'Mobile Optimization', included: true },
        { name: 'Advanced SEO Setup', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Content Management System', included: true },
        { name: 'E-commerce Functionality (Basic)', included: true },
        { name: 'Custom Animations', included: false },
        { name: 'Premium Support', included: false },
      ],
      details: [
        'Domain and hosting setup assistance',
        '3 months of technical support',
        'Advanced analytics with monthly reports',
        'Content strategy consultation',
        'Performance optimization',
        'Basic security features'
      ],
      recommended: true
    },
    {
      id: 'web-enterprise',
      name: 'Enterprise',
      description: 'Full-featured solution for established businesses requiring advanced functionality.',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        { name: 'Responsive Website (20+ pages)', included: true },
        { name: 'Mobile Optimization', included: true },
        { name: 'Advanced SEO Setup', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Content Management System', included: true },
        { name: 'E-commerce Functionality (Advanced)', included: true },
        { name: 'Custom Animations', included: true },
        { name: 'Premium Support', included: true },
      ],
      details: [
        'Domain and hosting premium setup',
        '12 months of priority technical support',
        'Comprehensive analytics with custom dashboard',
        'Content creation assistance',
        'Advanced security features',
        'Performance optimization',
        'Custom integrations with third-party services',
        'Dedicated account manager'
      ],
      recommended: false
    }
  ],
  marketing: [
    {
      id: 'marketing-basic',
      name: 'Starter',
      description: 'Essential digital marketing services to establish your online presence.',
      monthlyPrice: 599,
      yearlyPrice: 5999,
      features: [
        { name: 'Social Media Management (2 platforms)', included: true },
        { name: 'Basic SEO', included: true },
        { name: 'Monthly Content Calendar', included: true },
        { name: 'Weekly Posts (4 per month)', included: true },
        { name: 'Basic Analytics Reporting', included: true },
        { name: 'PPC Campaign Management', included: false },
        { name: 'Email Marketing', included: false },
        { name: 'Content Creation', included: false },
        { name: 'Conversion Rate Optimization', included: false },
      ],
      details: [
        'Social media account setup and optimization',
        'Keyword research',
        'Monthly performance report',
        'Competitor analysis',
        'Basic audience targeting'
      ],
      recommended: false
    },
    {
      id: 'marketing-pro',
      name: 'Growth',
      description: 'Comprehensive marketing strategy for businesses looking to expand their reach.',
      monthlyPrice: 1299,
      yearlyPrice: 12999,
      features: [
        { name: 'Social Media Management (4 platforms)', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Monthly Content Calendar', included: true },
        { name: 'Weekly Posts (8 per month)', included: true },
        { name: 'Detailed Analytics Reporting', included: true },
        { name: 'PPC Campaign Management', included: true },
        { name: 'Email Marketing', included: true },
        { name: 'Content Creation', included: false },
        { name: 'Conversion Rate Optimization', included: false },
      ],
      details: [
        'Social media strategy development',
        'Comprehensive SEO strategy',
        'Bi-weekly performance reports',
        'Competitor analysis and benchmarking',
        'Advanced audience targeting',
        'A/B testing',
        'Lead generation campaigns'
      ],
      recommended: true
    },
    {
      id: 'marketing-enterprise',
      name: 'Premium',
      description: 'All-inclusive marketing solution for businesses seeking maximum impact.',
      monthlyPrice: 2499,
      yearlyPrice: 24999,
      features: [
        { name: 'Social Media Management (All platforms)', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Monthly Content Calendar', included: true },
        { name: 'Weekly Posts (16 per month)', included: true },
        { name: 'Comprehensive Analytics Reporting', included: true },
        { name: 'PPC Campaign Management', included: true },
        { name: 'Email Marketing', included: true },
        { name: 'Content Creation', included: true },
        { name: 'Conversion Rate Optimization', included: true },
      ],
      details: [
        'Custom social media strategy',
        'Enterprise-level SEO strategy',
        'Weekly performance reports',
        'In-depth competitor analysis',
        'Custom audience targeting',
        'Comprehensive A/B testing',
        'Advanced lead generation campaigns',
        'Content marketing strategy',
        'Conversion funnel optimization',
        'Dedicated marketing manager'
      ],
      recommended: false
    }
  ],
  ai: [
    {
      id: 'ai-basic',
      name: 'AI Starter',
      description: 'Introduction to AI solutions for businesses exploring automation possibilities.',
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        { name: 'Basic AI Integration', included: true },
        { name: 'Chatbot Implementation', included: true },
        { name: 'Data Analysis (Basic)', included: true },
        { name: 'Monthly Consultation', included: true },
        { name: 'Basic Automation Setup', included: true },
        { name: 'Custom AI Model Development', included: false },
        { name: 'Advanced Analytics Dashboard', included: false },
        { name: 'Natural Language Processing', included: false },
        { name: 'Computer Vision Solutions', included: false },
      ],
      details: [
        'AI readiness assessment',
        'Basic chatbot setup',
        'Data collection strategy',
        'Monthly performance review',
        'Basic workflow automation'
      ],
      recommended: false
    },
    {
      id: 'ai-pro',
      name: 'AI Professional',
      description: 'Advanced AI solutions for businesses ready to leverage machine learning capabilities.',
      monthlyPrice: 1799,
      yearlyPrice: 17999,
      features: [
        { name: 'Advanced AI Integration', included: true },
        { name: 'Intelligent Chatbot Implementation', included: true },
        { name: 'Data Analysis (Advanced)', included: true },
        { name: 'Bi-weekly Consultation', included: true },
        { name: 'Advanced Automation Setup', included: true },
        { name: 'Custom AI Model Development', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: 'Natural Language Processing', included: false },
        { name: 'Computer Vision Solutions', included: false },
      ],
      details: [
        'Comprehensive AI strategy development',
        'Advanced chatbot with learning capabilities',
        'Data pipeline setup',
        'Predictive analytics implementation',
        'Process automation',
        'Custom machine learning model',
        'Integration with existing systems'
      ],
      recommended: true
    },
    {
      id: 'ai-enterprise',
      name: 'AI Enterprise',
      description: 'Comprehensive AI ecosystem for businesses requiring sophisticated machine learning solutions.',
      monthlyPrice: 3499,
      yearlyPrice: 34999,
      features: [
        { name: 'Enterprise AI Integration', included: true },
        { name: 'Advanced Intelligent Chatbot', included: true },
        { name: 'Comprehensive Data Analysis', included: true },
        { name: 'Weekly Consultation', included: true },
        { name: 'Complete Automation Setup', included: true },
        { name: 'Custom AI Model Development', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: 'Natural Language Processing', included: true },
        { name: 'Computer Vision Solutions', included: true },
      ],
      details: [
        'Enterprise AI strategy and roadmap',
        'Multi-functional AI assistant',
        'Comprehensive data strategy',
        'Real-time analytics and insights',
        'End-to-end process automation',
        'Multiple custom AI models',
        'Seamless system integration',
        'Advanced NLP implementation',
        'Computer vision solutions',
        'Dedicated AI development team'
      ],
      recommended: false
    }
  ]
};

// Accordion Component
const Accordion = ({ title, children, isOpen, toggleAccordion }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-deeper text-left font-medium"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 bg-white dark:bg-dark">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Package Card Component
const PackageCard = ({ pkg, billingPeriod }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  const price = billingPeriod === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-dark rounded-xl shadow-lg overflow-hidden border ${pkg.recommended ? 'border-primary' : 'border-gray-200 dark:border-gray-700'} relative`}
    >
      {pkg.recommended && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            RECOMMENDED
          </div>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold font-poppins mb-2">{pkg.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{pkg.description}</p>

        <div className="mb-6 text-center">
          <p className="text-4xl font-bold font-poppins">
            ₹{price.toLocaleString()}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
            </span>
          </p>
          {billingPeriod === 'yearly' && (
            <p className="text-sm text-primary mt-2">Save {Math.round((1 - (pkg.yearlyPrice / (pkg.monthlyPrice * 12))) * 100)}%</p>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
              ) : (
                <FaTimes className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        <Accordion
          title="View Package Details"
          isOpen={openAccordion}
          toggleAccordion={toggleAccordion}
        >
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            {pkg.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Accordion>
      </div>

      <div className="p-6 bg-gray-50 dark:bg-dark-deeper">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${pkg.recommended
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Get This Plan
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState('web');
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const categories = [
    { id: 'web', name: 'Web Development' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'ai', name: 'AI Solutions' },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-deeper">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-primary">Packages</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Choose the perfect package for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-dark-deeper text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center gap-4 mb-12"
          >
            <span
              className={`font-medium ${billingPeriod === 'monthly' ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span
              className={`font-medium ${billingPeriod === 'yearly' ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}
            >
              Yearly <span className="text-xs text-primary">Save up to 20%</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {packages[selectedCategory].map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  billingPeriod={billingPeriod}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-deeper mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions about our packages? Find answers to common questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion
              title="What's included in the package price?"
              isOpen={false}
              toggleAccordion={() => {}}
            >
              <p>Each package includes all the features listed, along with dedicated support and regular updates. The exact deliverables vary by package type and tier, but all packages are designed to provide comprehensive solutions for your specific needs.</p>
            </Accordion>

            <Accordion
              title="Can I upgrade my package later?"
              isOpen={false}
              toggleAccordion={() => {}}
            >
              <p>Yes, you can upgrade your package at any time. We'll prorate the remaining value of your current package and apply it to the new one. Contact our support team to initiate an upgrade.</p>
            </Accordion>

            <Accordion
              title="Do you offer custom packages?"
              isOpen={false}
              toggleAccordion={() => {}}
            >
              <p>Absolutely! If none of our standard packages meet your specific requirements, we can create a custom package tailored to your business needs. Contact us to discuss your requirements and get a custom quote.</p>
            </Accordion>

            <Accordion
              title="What payment methods do you accept?"
              isOpen={false}
              toggleAccordion={() => {}}
            >
              <p>We accept all major credit cards, PayPal, and bank transfers. For enterprise packages, we can also arrange alternative payment methods if required.</p>
            </Accordion>

            <Accordion
              title="Is there a refund policy?"
              isOpen={false}
              toggleAccordion={() => {}}
            >
              <p>We offer a 14-day money-back guarantee for all our packages. If you're not satisfied with our services within the first 14 days, you can request a full refund. After this period, refunds are handled on a case-by-case basis.</p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-poppins mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your specific requirements and get a personalized quote.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}