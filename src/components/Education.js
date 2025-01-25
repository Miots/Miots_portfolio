// src/components/Education.js
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold mb-2 flex items-center justify-center">
          <i className="fas fa-graduation-cap mr-2"></i> 
          Bachelor of Computer Science &amp; Risks &amp; Business Intelligence
        </h4>
        <h5 className="text-xl font-medium mb-4">2022 - 2025</h5> 
        <p className="text-lg font-medium mb-2"><em>ESMIA University</em></p>
        <p className="text-gray-700">
          This program provided me with a solid foundation in computer science principles, 
          risk management, and business intelligence. I gained hands-on experience in programming, 
          data analysis, and developing solutions to complex problems.
        </p>
      </div>
    </section>
  );
}

export default Education;