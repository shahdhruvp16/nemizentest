'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode,
  FaChartLine,
  FaRobot,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaSearch,
  FaUsers,
  FaDatabase,
  FaLaptopCode,
  FaBullhorn
} from 'react-icons/fa';

// Service data
const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies that deliver exceptional user experiences.',
    icon: <FaCode className="text-4xl text-primary" />,
    category: 'Web',
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
    title: 'Branding &amp; Design',
    description: 'Creative branding and design services that communicate your unique value proposition.',
    icon: <FaPalette className="text-4xl text-primary" />,
    category: 'Creative',
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
    details: [
      'Content strategy development',
      'Blog and article writing',
      'Video content production',
      'Infographic design',
      'Content distribution',
      'Performance measurement'
    ]
  }
];
