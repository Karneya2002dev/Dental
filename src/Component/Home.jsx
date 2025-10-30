import React from "react";
import { motion } from "framer-motion";
import Hero from "../Component/Hero";
import { Calendar, Star, Phone, MapPin } from "lucide-react";

const services = [
  {
    title: "General Dentistry",
    desc: "Comprehensive exams, cleanings, and cavity treatments to keep your smile healthy.",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with whitening, veneers, and aesthetic restorations.",
  },
  {
    title: "Orthodontics",
    desc: "Straighten your teeth with braces or clear aligners for a confident smile.",
  },
  {
    title: "Oral Surgery",
    desc: "Expert extractions, dental implants, and advanced surgical care.",
  },
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Chief Dental Surgeon",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Arjun Patel",
    role: "Orthodontist",
    img: "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png",
  },
  {
    name: "Dr. Meera Kapoor",
    role: "Cosmetic Dentist",
    img: "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg",
  },
];

const testimonials = [
  {
    name: "Rohit Verma",
    review:
      "Absolutely wonderful experience! The doctors are so kind and professional. My teeth have never looked better!",
  },
  {
    name: "Sneha Iyer",
    review:
      "The clinic is clean, modern, and welcoming. The staff took great care to make me feel comfortable during my visit.",
  },
  {
    name: "Amit Khanna",
    review:
      "Best dental experience I’ve ever had. They truly care about your comfort and the results are amazing!",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden font-sans">
      {/* 🌟 Hero Section */}
      <Hero />

      {/* 🦷 Services Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-4"
        >
          Our Dental Services
        </motion.h2>
        <p className="text-center text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
          From regular checkups to advanced cosmetic and surgical treatments, we
          provide personalized care designed for your best smile.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🏥 About Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src="https://dentally.in/wp-content/uploads/2023/04/The-Role-of-a-Dentist-in-Maintaining-Your-Oral-Health.png"
              alt="Dental Clinic"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Our Clinic
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At SmileCare Dental, we are dedicated to creating beautiful,
              healthy smiles for all our patients. Our experienced team uses
              modern technology and compassionate care to ensure a relaxing
              experience every time you visit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you’re here for a routine cleaning or a full smile
              transformation, we’re committed to giving you results you’ll love
              with a gentle touch and personalized approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 👩‍⚕️ Team Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Meet Our Experts
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((doc) => (
            <motion.div
              key={doc.name}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {doc.name}
              </h3>
              <p className="text-gray-500 text-sm">{doc.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ Testimonials Section */}
      <section className="bg-linear-to-r from-blue-700 via-blue-600 to-sky-500 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-blue-50 italic mb-3">"{t.review}"</p>
                <h4 className="font-semibold">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📅 Appointment Call-to-Action Section */}
      <section className="bg-linear-to-r from-blue-700 via-blue-600 to-sky-500 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Need a Dental Appointment?
            </h3>
            <p className="text-blue-100 mt-3 text-lg max-w-lg">
              Schedule your visit today and experience gentle, expert dental
              care from our friendly professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Calendar size={22} /> Book Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* 📍 Contact Preview / Footer */}
      <footer className="bg-blue-950 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-lg mb-3">SmileCare Dental</h4>
            <p className="text-blue-200 text-sm">
              Advanced dental care with compassion and precision. Creating
              smiles since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
            <p className="flex justify-center md:justify-start items-center gap-2 text-blue-200">
              <Phone size={18} /> +91 98765 43210
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 text-blue-200">
              <MapPin size={18} /> 123 Smile Street, Chennai, India
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Timings</h4>
            <p className="text-blue-200 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className="text-blue-200 text-sm">Sunday: Closed</p>
          </div>
        </div>
        <div className="text-center text-blue-300 text-sm mt-6 border-t border-blue-800 pt-4">
          © {new Date().getFullYear()} SmileCare Dental Clinic — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
