"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import {
  FaEthernet,
  FaLightbulb,
  FaRegClock,
  FaRegSmile,
} from "react-icons/fa";
import ParticleBackground from "../components/ui/ParticleBackground";
import Logo from "../components/ui/Logo";

// Value icons with animations
const ValueIcon = ({
  icon: Icon,
  title,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  delay?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.2 },
        },
      }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4"
      >
        <Icon size={28} />
      </motion.div>
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon: Icon, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.2 },
        },
      }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white dark:bg-dark rounded-xl p-6 shadow-md hover:shadow-xl card-hover border border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary mb-4 shadow-inner">
        <Icon size={24} />
      </div>
      <h3 className="font-poppins font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <Link
        href="/services"
        className="mt-4 inline-flex items-center text-primary font-medium"
      >
        Learn more <FiArrowRight className="ml-1" />
      </Link>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, role, testimonial, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="bg-white dark:bg-dark rounded-xl p-6 shadow-md hover:shadow-xl card-hover border border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
    >
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-poppins font-semibold">{name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 italic">
        "{testimonial}"
      </p>
    </motion.div>
  );
};

export default function Home() {
  // Animation controls for sections
  const heroControls = useAnimation();
  const aboutControls = useAnimation();
  const whyUsControls = useAnimation();

  // Refs for intersection observer
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (aboutInView) aboutControls.start("visible");
    if (whyUsInView) whyUsControls.start("visible");
  }, [
    heroControls,
    aboutControls,
    whyUsControls,
    heroInView,
    aboutInView,
    whyUsInView,
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background to-background/95 dark:from-dark dark:to-dark/95">
        <ParticleBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 1, staggerChildren: 0.2 },
              },
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 1.2, type: "spring", stiffness: 100 },
                },
              }}
              className="mb-8 mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Logo with animations */}
              <motion.div
                className="w-full h-full relative z-10"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {/* Using the Logo component from navbar */}
                <div className="w-full h-full flex items-center justify-center drop-shadow-xl">
                  <Logo className="w-full h-full" />
                </div>
              </motion.div>

              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 border border-accent/20 rounded-full"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold font-poppins mb-6 gradient-text tracking-tight"
            >
              Tech with Purpose, Peace, and Power
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4 },
                },
              }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              We build innovative digital solutions that bring{" "}
              <span className="text-primary font-medium">harmony</span> to your
              business and{" "}
              <span className="text-accent font-medium">empower</span> your
              growth in the digital world.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.6 },
                },
              }}
            >
              <Link
                href="/contact"
                className="relative inline-block group focus:outline-none"
              >
                {/* Background Layer */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-xl group-hover:shadow-xl transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                />

                {/* Glossy Shine Layer */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Button Text Layer */}
                <motion.span
                  className="relative z-10 px-10 py-5 text-white font-semibold text-xl tracking-wide transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:translate-y-[-1px]"
                  whileTap={{ scale: 0.96 }}
                >
                  Get Started
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-3/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background/90 dark:bg-dark-deeper relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={aboutRef}
            initial="hidden"
            animate={aboutControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, staggerChildren: 0.1 },
              },
            }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-3xl md:text-4xl font-bold font-poppins mb-4 gradient-text"
            >
              About <span className="text-primary">NemiZen</span>
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              We combine technology with peace and purpose to create digital
              solutions that make a difference.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <ValueIcon icon={FaEthernet} title="Ethics" delay={0} />
            <ValueIcon icon={FaLightbulb} title="Innovation" delay={1} />
            <ValueIcon icon={FaRegSmile} title="Simplicity" delay={2} />
            <ValueIcon icon={FaRegClock} title="Speed" delay={3} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 gradient-text">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive solutions to help your business thrive in the
              digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Website & App Development"
              description="Custom websites and applications built with the latest technologies to deliver exceptional user experiences."
              icon={FaEthernet}
              delay={0}
            />
            <ServiceCard
              title="Digital Marketing"
              description="Strategic marketing campaigns to increase your online presence and drive conversions."
              icon={FaLightbulb}
              delay={1}
            />
            <ServiceCard
              title="Social Media"
              description="Engaging social media strategies to build your brand and connect with your audience."
              icon={FaRegSmile}
              delay={2}
            />
            <ServiceCard
              title="Accounting Services"
              description="Professional accounting solutions to keep your finances organized and compliant."
              icon={FaRegClock}
              delay={3}
            />
            <ServiceCard
              title="Branding & Design"
              description="Creative design services to establish a strong brand identity that resonates with your audience."
              icon={FaLightbulb}
              delay={4}
            />
            <ServiceCard
              title="AI/ML Integration"
              description="Cutting-edge artificial intelligence and machine learning solutions to optimize your business processes."
              icon={FaEthernet}
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background/90 dark:bg-dark-deeper relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={whyUsRef}
            initial="hidden"
            animate={whyUsControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-3xl md:text-4xl font-bold font-poppins mb-6 gradient-text"
              >
                Why Choose <span className="text-primary">NemiZen</span>?
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-gray-600 dark:text-gray-300 mb-8"
              >
                We combine technical expertise with a deep understanding of
                business needs to deliver solutions that drive real results.
              </motion.p>

              <div className="space-y-4">
                {[
                  "Experienced team of professionals",
                  "Tailored solutions for your specific needs",
                  "Commitment to quality and excellence",
                  "Transparent communication throughout the process",
                  "Ongoing support and maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 },
                      },
                    }}
                    className="flex items-start"
                  >
                    <span className="text-accent mr-2 mt-1">
                      <FiCheck size={18} />
                    </span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              className="relative h-[400px] flex items-center justify-center rounded-xl overflow-hidden shadow-xl"
            >
              <Logo />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="CEO, TechStart"
              testimonial="NemiZen transformed our online presence. Their team was professional, responsive, and delivered beyond our expectations."
              image="/images/avatar.svg"
              delay={0}
            />
            <TestimonialCard
              name="Michael Chen"
              role="Marketing Director, GrowthHub"
              testimonial="The digital marketing strategy developed by NemiZen helped us increase our leads by 150% in just three months."
              image="/images/avatar.svg"
              delay={1}
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Founder, EcoSolutions"
              testimonial="Working with NemiZen was a game-changer for our startup. Their AI integration solutions streamlined our operations significantly."
              image="/images/avatar.svg"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-white/20 animate-pulse-slow"></div>
            <div
              className="absolute top-40 right-20 w-24 h-24 rounded-full border-4 border-white/30 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border-4 border-white/20 animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full border-2 border-white/20 animate-pulse-slow"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create innovative solutions that drive your
            business forward.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 inline-block text-lg shadow-md hover:shadow-lg"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.span>
          </Link>
        </div>
      </section>
    </>
  );
}
