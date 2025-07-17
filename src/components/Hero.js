// app/page.tsx
'use client'; // Required for animations

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiGlobe, FiTrendingUp, FiUsers, FiMapPin } from 'react-icons/fi';

export default function Home() {
  const features = [
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Comprehensive market size, trends, and opportunities"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Business Culture",
      description: "Cultural insights and business practices"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Regional Data",
      description: "Location-specific opportunities and challenges"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Explore Countries",
      description: "Detailed global market intelligence"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <Image
                src="data:image/png;base64,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" // Update this path to your logo file
                alt="Lead Gen Pro Logo"
                width={120} // Adjust as needed
                height={120} // Adjust as needed
                className="h-24 w-auto" // Adjust size as needed
              />
            </motion.div>

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
              Unlock Global Market Opportunities
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Get detailed market insights and business intelligence for any country or region
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