'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi';
import Logo from '../ui/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    // For now, we'll just simulate success
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Packages', href: '/packages' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/services#web' },
        { name: 'Digital Marketing', href: '/services#marketing' },
        { name: 'Branding & Design', href: '/services#branding' },
        { name: 'AI/ML Integration', href: '/services#ai' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark pt-16 pb-8 border-t border-gray-200 dark:border-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold font-poppins">NemiZen Technology</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Tech with Purpose, Peace, and Power. We build innovative solutions that bring harmony to your digital presence.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 font-poppins">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 font-poppins">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-deeper focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-accent"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} NemiZen Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}