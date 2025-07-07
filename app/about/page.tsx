'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const headerControls = useAnimation();
  const visionControls = useAnimation();
  const founderControls = useAnimation();

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [founderRef, founderInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (visionInView) visionControls.start('visible');
    if (founderInView) founderControls.start('visible');
  }, [headerInView, visionInView, founderInView, headerControls, visionControls, founderControls]);

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-deeper">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl font-bold font-poppins mb-6"
            >
              About <span className="text-primary">NemiZen</span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Our journey, mission, and the values that drive us forward.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={visionRef}
            initial="hidden"
            animate={visionControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-3xl font-bold font-poppins mb-4"
              >
                Our Vision
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-gray-600 dark:text-gray-300 mb-8"
              >
                To create a world where technology brings peace and harmony to businesses and individuals, enabling them to achieve their full potential through ethical and innovative digital solutions.
              </motion.p>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                }}
                className="text-3xl font-bold font-poppins mb-4"
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                }}
                className="text-gray-600 dark:text-gray-300"
              >
                We are committed to delivering exceptional digital services that combine technical excellence with ethical principles, creating solutions that empower our clients to succeed in an ever-evolving digital landscape.
              </motion.p>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/vision.svg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={founderRef}
            initial="hidden"
            animate={founderControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, rotateY: 90 },
                visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
              }}
              className="bg-white dark:bg-dark rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/images/founder.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins mb-2">Founder&apos;s Note</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &quot;At NemiZen Technology, we are guided by the principles of Jain Tirthankara Neminath, who embodied compassion, non-violence, and ethical conduct. These values are at the core of everything we do, from how we treat our team members to how we approach client projects.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We believe that technology should be a force for good, bringing peace and harmony rather than chaos and disruption. This philosophy influences our approach to innovation, ensuring that we create solutions that are not only technically excellent but also ethically sound and beneficial to society.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for being part of our journey as we continue to build technology with purpose, peace, and power.&quot;
                  </p>
                  <p className="mt-4 font-semibold">- Founder, NemiZen Technology</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
              }}
              className="text-center mt-12 p-6 bg-gray-50 dark:bg-dark-deeper rounded-xl"
            >
              <h3 className="text-xl font-semibold font-poppins mb-4">
                Built with values of Jain Tirthankara Neminath
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our company is inspired by the teachings of Neminath, the 22nd Tirthankara of Jainism, who exemplified compassion, non-violence, and ethical conduct. These principles guide our business practices and our approach to technology.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
