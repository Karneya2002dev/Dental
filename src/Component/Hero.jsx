import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1419156177/photo/modern-dental-office.jpg?s=612x612&w=0&k=20&c=WaoKv9FOqlpRanQHO6ynP762QPyqAjH8PADbnmRP0KE=')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent"></div>

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between z-10 gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Creating <span className="text-[#0097b2]">Beautiful Smiles</span> 
            <br className="hidden md:block" />
            That Last a Lifetime
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            Experience world-class dental care with cutting-edge technology and a caring team
            that prioritizes your comfort and confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#0097b2] text-white rounded-full shadow-md hover:shadow-lg hover:bg-[#00839a] transition-transform transform hover:-translate-y-1"
            >
              Book Appointment
            </a>
            <a
              href="/services"
              className="px-8 py-3 border-2 border-[#0097b2] text-[#0097b2] rounded-full hover:bg-[#0097b2] hover:text-white transition-transform transform hover:-translate-y-1"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-80 md:h-112 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Dental Clinic"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
