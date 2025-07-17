// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiAward, FiBarChart2, FiBriefcase, FiUsers } from 'react-icons/fi';

export default function About() {
  const stats = [
    { value: '100+', label: 'Countries Covered' },
    { value: '10K+', label: 'Businesses Served' },
    { value: '2015', label: 'Founded In' },
    { value: '24/7', label: 'Support' }
  ];

  const team = [
    {
      name: 'Sher Alm',
      role: 'CEO & Founder',
      bio: 'Market research expert with 15+ years experience'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Analyst',
      bio: 'Specializes in emerging markets and cultural trends'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Scientist',
      bio: 'Develops our proprietary market intelligence algorithms'
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
                About Lead Gen Pro
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Empowering businesses with actionable global market intelligence since 2015
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To democratize access to high-quality market intelligence, helping businesses of all sizes make informed global expansion decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 mb-4">
                <FiBarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">We combine big data analytics with human expertise to deliver accurate market intelligence.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 mb-4">
                <FiBriefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Focused</h3>
              <p className="text-gray-600">Our reports are designed by business experts for practical decision-making.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 mb-4">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Worldwide</h3>
              <p className="text-gray-600">Used by Fortune 500 companies and startups alike across 100+ countries.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The passionate experts behind our market intelligence platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <FiUsers className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore Global Markets?</h2>
            <p className="text-xl text-blue-100 mb-8">Get started with our comprehensive country reports today</p>
            <Link href="/countries">
              <button className="group relative px-8 py-3 bg-white text-blue-600 font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/30">
                <span className="relative z-10 flex items-center">
                  Browse Countries <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}