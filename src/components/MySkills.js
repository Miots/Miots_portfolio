// src/components/MySkills.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MySkills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-100 text-center" ref={sectionRef} data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
              <i className="fab fa-html5 text-4xl text-blue-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">80%</span>
            </div>
            <span className="mt-2">HTML</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
              <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">75%</span>
            </div>
            <span className="mt-2">CSS</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
              <i className="fab fa-js text-4xl text-blue-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">85%</span>
            </div>
            <span className="mt-2">JavaScript</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
              <i className="fab fa-python text-4xl text-blue-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">70%</span>
            </div>
            <span className="mt-2">Python</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frameworks</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-green-500">
              <i className="fab fa-react text-4xl text-green-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">80%</span>
            </div>
            <span className="mt-2">React</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-green-500">
              <i className="fab fa-bootstrap text-4xl text-green-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">75%</span>
            </div>
            <span className="mt-2">Bootstrap</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-green-500">
              <i className="fab fa-database text-4xl text-green-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">70%</span>
            </div>
            <span className="mt-2">Django</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-green-500">
              <i className="fas fa-flask text-4xl text-green-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">65%</span>
            </div>
            <span className="mt-2">Flask</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tools</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-red-500">
              <i className="fab fa-linux text-4xl text-red-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">80%</span>
            </div>
            <span className="mt-2">Linux</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-red-500">
              <i className="fab fa-git-alt text-4xl text-red-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">75%</span>
            </div>
            <span className="mt-2">Git</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-red-500">
              <i className="fab fa-github text-4xl text-red-500"></i>
              <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-2 py-1">75%</span>
            </div>
            <span className="mt-2">GitHub</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MySkills;