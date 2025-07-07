'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode, FaChartLine, FaRobot, FaPalette, FaMobileAlt,
  FaServer, FaShoppingCart, FaSearch, FaUsers,
  FaDatabase, FaLaptopCode, FaBullhorn
} from 'react-icons/fa';

// Services data
const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies that deliver exceptional user experiences.',
    icon: <FaCode className="text-4xl text-primary" />,
    category: 'Web',
    price: '₹20,000 – ₹60,000 ($240 – $720)',
    details: [
      'Custom design and development',
      'Responsive for all devices',
      'SEO optimization',
      'Performance optimization',
      'Content management systems',
      'E-commerce integration'
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    icon: <FaMobileAlt className="text-4xl text-primary" />,
    category: 'Web',
    price: '₹45,000 – ₹1,20,000 ($540 – $1,440)',
    details: [
      'iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Maintenance and support',
      'Integration with existing systems'
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing services that increase visibility, drive traffic, and generate leads.',
    icon: <FaChartLine className="text-4xl text-primary" />,
    category: 'Marketing',
    price: '₹10,000 – ₹40,000 ($120 – $480)',
    details: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Email marketing campaigns',
      'Content marketing strategy',
      'Conversion rate optimization',
      'Analytics and reporting'
    ]
  },
  {
    id: 4,
    title: 'Social Media Management',
    description: 'Comprehensive social media strategies that build brand awareness and engage your target audience.',
    icon: <FaUsers className="text-4xl text-primary" />,
    category: 'Marketing',
    price: '₹8,000 – ₹35,000 ($96 – $420)',
    details: [
      'Platform strategy and setup',
      'Content creation and curation',
      'Community management',
      'Paid social campaigns',
      'Performance analytics',
      'Influencer partnerships'
    ]
  },
  {
    id: 5,
    title: 'Branding & Design',
    description: 'Creative branding and design services that communicate your unique value proposition.',
    icon: <FaPalette className="text-4xl text-primary" />,
    category: 'Creative',
    price: '₹6,000 – ₹30,000 ($72 – $360)',
    details: [
      'Brand identity development',
      'Logo design',
      'Visual style guides',
      'Marketing materials',
      'Packaging design',
      'Brand strategy consulting'
    ]
  },
  {
    id: 6,
    title: 'AI/ML Integration',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that transform your business.',
    icon: <FaRobot className="text-4xl text-primary" />,
    category: 'Automation',
    price: '₹60,000 – ₹2,00,000 ($720 – $2,400)',
    details: [
      'Custom AI model development',
      'Machine learning implementation',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'AI strategy consulting'
    ]
  },
  {
    id: 7,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce solutions that drive online sales and improve customer experience.',
    icon: <FaShoppingCart className="text-4xl text-primary" />,
    category: 'Web',
    price: '₹25,000 – ₹70,000 ($300 – $840)',
    details: [
      'Custom e-commerce development',
      'Shopping cart integration',
      'Payment gateway setup',
      'Inventory management',
      'Customer experience optimization',
      'Mobile commerce solutions'
    ]
  },
  {
    id: 8,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO services that improve your search engine rankings and drive organic traffic.',
    icon: <FaSearch className="text-4xl text-primary" />,
    category: 'Marketing',
    price: '₹8,000 – ₹35,000 ($96 – $420)',
    details: [
      'Keyword research and strategy',
      'On-page optimization',
      'Technical SEO audits',
      'Link building campaigns',
      'Local SEO optimization',
      'SEO performance reporting'
    ]
  },
  {
    id: 9,
    title: 'Backend Development',
    description: 'Robust backend systems that power your applications and handle complex business logic.',
    icon: <FaServer className="text-4xl text-primary" />,
    category: 'Web',
    price: '₹18,000 – ₹55,000 ($216 – $660)',
    details: [
      'API development',
      'Database design',
      'Cloud infrastructure',
      'Authentication systems',
      'Performance optimization',
      'Scalability planning'
    ]
  },
  {
    id: 10,
    title: 'Data Analytics',
    description: 'Data analytics services that turn your raw data into actionable business insights.',
    icon: <FaDatabase className="text-4xl text-primary" />,
    category: 'Automation',
    price: '₹30,000 – ₹85,000 ($360 – $1,020)',
    details: [
      'Data collection and processing',
      'Custom dashboard development',
      'Business intelligence solutions',
      'Data visualization',
      'Predictive analytics',
      'Data strategy consulting'
    ]
  },
  {
    id: 11,
    title: 'UI/UX Design',
    description: 'User-centered design services that create intuitive, engaging digital experiences.',
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    category: 'Creative',
    price: '₹8,000 – ₹35,000 ($96 – $420)',
    details: [
      'User research and testing',
      'Wireframing and prototyping',
      'Interaction design',
      'Visual design',
      'Usability testing',
      'Design system creation'
    ]
  },
  {
    id: 12,
    title: 'Content Marketing',
    description: 'Strategic content marketing services that attract, engage, and convert your target audience.',
    icon: <FaBullhorn className="text-4xl text-primary" />,
    category: 'Marketing',
    price: '₹7,000 – ₹28,000 ($84 – $336)',
    details: [
      'Content strategy development',
      'Blog and article writing',
      'Video content production',
      'Infographic design',
      'Content distribution',
      'Performance measurement'
    ]
  },
];

// Service Card Component
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  category: string;
  price: string;
  details: string[];
};

const ServiceCard = ({
  service,
  onClick,
}: {
  service: Service;
  onClick: (service: Service) => void;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-dark rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-800"
      onClick={() => onClick(service)}
    >
      <div className="p-6">
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold font-poppins mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
        {service.price && (
          <p className="text-sm font-semibold text-primary mt-2">Starts from {service.price}</p>
        )}
      </div>
      <div className="bg-gray-50 dark:bg-dark-deeper p-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{service.category}</span>
        <span className="text-primary text-sm font-medium">Learn More →</span>
      </div>
    </motion.div>
  );
};

// Service Modal Component
const ServiceModal = ({
  service,
  isOpen,
  onClose,
}: {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="bg-white dark:bg-dark rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div>{service.icon}</div>
                <h3 className="text-2xl font-bold font-poppins">{service.title}</h3>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold font-poppins mb-3">What We Offer</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-dark-deeper p-6">
            <button onClick={onClose} className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Main Component
export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Web', 'Marketing', 'Creative', 'Automation'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  interface HandleServiceClick {
    (service: Service): void;
  }

  const handleServiceClick: HandleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gray-50 dark:bg-dark-deeper">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-dark-deeper text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} onClick={handleServiceClick} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}
