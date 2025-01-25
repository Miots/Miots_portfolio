import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <strong className="text-xl font-semibold mb-2 flex items-center justify-center">
            <i className="fas fa-shopping-cart mr-2"></i> E-commerce Solutions
          </strong>
          <p className="text-gray-700">Custom online stores to help you sell products or services efficiently and securely.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <strong className="text-xl font-semibold mb-2 flex items-center justify-center">
            <i className="fas fa-search mr-2"></i> SEO Optimization
          </strong>
          <p className="text-gray-700">Improve your website’s visibility on search engines to attract more visitors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <strong className="text-xl font-semibold mb-2 flex items-center justify-center">
            <i className="fas fa-tools mr-2"></i> Application Maintenance
          </strong>
          <p className="text-gray-700">Regular updates, bug fixes, and ongoing support to keep your website running smoothly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <strong className="text-xl font-semibold mb-2 flex items-center justify-center">
            <i className="fas fa-server mr-2"></i> Web Hosting
          </strong>
          <p className="text-gray-700">Reliable and secure hosting services to keep your website online 24/7.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <strong className="text-xl font-semibold mb-2 flex items-center justify-center">
            <i className="fas fa-paint-brush mr-2"></i> Website Customization
          </strong>
          <p className="text-gray-700">Personalize existing websites with new features or design updates to match your goals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <strong className="text-xl font-semibold mb-2 flex items-center justify-center">
            <i className="fas fa-database mr-2"></i> Database Integration
          </strong>
          <p className="text-gray-700">Configuration and management of simple databases.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;