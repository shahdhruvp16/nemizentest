'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const packages = [
  {
    id: 'startup-booster',
    name: 'Startup Booster Pack',
    price: 7999,
    billing: 'one-time',
    features: [
      '1-Page Website',
      'Logo + Basic SEO',
      'Social Media Profile Setup',
      'Business Email Setup',
    ],
    recommended: false,
  },
  {
    id: 'ecommerce-power',
    name: 'E-Commerce Power Pack',
    price: 19999,
    billing: 'one-time',
    features: [
      'E-commerce Website',
      'Payment Gateway Integration',
      '5 Social Media Creatives',
      'SEO Basics',
    ],
    recommended: true,
  },
  {
    id: 'digital-growth',
    name: 'Digital Growth Pack',
    price: 12999,
    billing: 'monthly',
    features: [
      'Instagram + Facebook Management',
      '12 Posts + 4 Reels',
      'Monthly Analytics Report',
      'SEO + Blog Writing',
    ],
    recommended: false,
  },
  {
    id: 'business-backbone',
    name: 'Business Backbone Pack',
    price: 24999,
    billing: 'one-time',
    features: [
      'Business Website + ERP Integration',
      'Accounting Dashboard',
      'Branding Kit',
      'Legal Document Support',
    ],
    recommended: false,
  },
];

const PackageCard = ({ pkg }: { pkg: (typeof packages)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={`bg-white dark:bg-dark p-6 rounded-xl shadow-lg border ${
      pkg.recommended ? 'border-primary' : 'border-gray-300 dark:border-gray-700'
    } relative`}
  >
    {pkg.recommended && (
      <div className="absolute top-0 right-0">
        <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          RECOMMENDED
        </div>
      </div>
    )}
    <h3 className="text-2xl font-bold font-poppins mb-2">{pkg.name}</h3>
    <p className="text-3xl font-bold text-primary mb-4">
      ₹{pkg.price.toLocaleString()}
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {pkg.billing === 'monthly' ? '/mo' : ''}
      </span>
    </p>
    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
      {pkg.features.map((f, i) => (
        <li key={i} className="flex items-start">
          <FaCheck className="text-primary mt-1 mr-2" /> {f}
        </li>
      ))}
    </ul>
    <button className="w-full mt-6 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition">
      Get This Plan
    </button>
  </motion.div>
);

export default function Packages() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 bg-gray-50 dark:bg-dark">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
          🎁 NemiZen <span className="text-primary">Tech Packages</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Flexible, business-ready solutions built to scale with your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
