// app/page.tsx
'use client'; // Required for animations

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGlobe, FiTrendingUp, FiUsers, FiMapPin } from 'react-icons/fi';

export default function Home() {
  const features = [
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Gain powerful insights to make smarter business decisions."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Business Culture",
      description: "Understand cultural nuances and close deals with confidence."
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Regional Data",
      description: "Access accurate, location-specific data for targeted strategies."
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Explore Countries",
      description: "Discover opportunities across 120+ countries in one place."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          > 
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Lead Gen Pro
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Unlock Trusted Lead Databases for Your Business.
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
             Access verified leads from 120+ countries – all in one powerful platform. Grow smarter, faster, and bigger!
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/countries"
              > <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  <span className="relative z-10 flex items-center">
                    Get Started <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Market Insights Delivered</h2>
            <p className="text-xl text-blue-100 mb-8">Stay ahead with our exclusive market reports</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}