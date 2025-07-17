'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiChevronDown, FiPlus, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { countryData } from '@/utils/Data';

const regions = ["All Regions", "North America", "Europe", "Asia", "Oceania", "Global", "Web"];

export default function CountryExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredCountries = Object.keys(countryData).filter(country => {
    const matchesSearch = country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All Regions' || 
                         (selectedRegion === 'Global' && country === 'Global') ||
                         (selectedRegion === 'Web' && country === 'Web') ||
                         (countryData[country].region === selectedRegion);
    
    return matchesSearch && matchesRegion;
  });

  const getCountryRegion = (country) => {
    if (country === 'Global') return 'Global';
    if (country === 'Web') return 'Web';
    if (['USA', 'Canada', 'Mexico'].includes(country)) return 'North America';
    if (['UK', 'Germany', 'France', 'Italy', 'Spain'].includes(country)) return 'Europe';
    if (['China', 'India', 'Japan'].includes(country)) return 'Asia';
    return 'Other';
  };

  const openModal = (country) => {
    setSelectedCountry(country);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Global Database Vertices.</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Choose a country or region to unlock verified leads, industry insights, and growth potential—all in one platform.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border text-black border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search countries or regions..."
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {regions.map((region, index) => (
            <motion.button
              key={region}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${
                selectedRegion === region
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {region}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="border-t border-gray-200 my-8"
      />

      {/* Countries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country, index) => (
          <motion.div
            key={country}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => openModal(country)}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {country}
                  </h2>
                  <p className="text-gray-500 mb-2">{getCountryRegion(country)}</p>
                </div>
                <button 
                  className="text-blue-600 hover:text-blue-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle favorite action
                  }}
                >
                  <FiPlus className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Total Categories</p>
                <p className="font-medium text-lg text-black">
                  {Object.keys(countryData[country]).length}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Sample Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(countryData[country]).slice(0, 3).map((category) => (
                    <motion.span
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {category}
                    </motion.span>
                  ))}
                  {Object.keys(countryData[country]).length > 3 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      +{Object.keys(countryData[country]).length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCountry} Market Data
                </h2>
                <p className="text-gray-600">{getCountryRegion(selectedCountry)}</p>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1 p-6">
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">Total Categories</p>
                  <p className="text-2xl font-bold text-black">{Object.keys(countryData[selectedCountry]).length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Largest Segment</p>
                  <p className="text-xl font-medium truncate text-black">
                    {Object.entries(countryData[selectedCountry]).reduce((a, b) => a[1] > b[1] ? a : b)[0]}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-600">Top Segment Size</p>
                  <p className="text-xl font-medium  text-black">
                    {Object.entries(countryData[selectedCountry]).reduce((a, b) => a[1] > b[1] ? a : b)[1]}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">All Categories</h3>
              <div className="space-y-4">
                {Object.entries(countryData[selectedCountry]).map(([category, value]) => (
                  <div key={category} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900 capitalize">{category}</h4>
                      <span className="text-blue-600 font-medium">{value}</span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ 
                            width: `${Math.min(100, parseInt(value.replace(/[^\d]/g, '')) / 1000000 * 100)}%` 
                          }}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {Math.min(100, parseInt(value.replace(/[^\d]/g, '')) / 1000000 * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}