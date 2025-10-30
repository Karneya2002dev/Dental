import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", phone: "", email: "", date: "", message: "" });
    }, 1500);
  };

  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Book Your Appointment
          </h2>

          <form onSubmit={submit} className="space-y-5">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email (optional)"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full pl-10 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Message / Notes"
              rows="4"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-700 hover:to-sky-600 transition-all"
            >
              {status === "loading" ? "Submitting..." : "Request Appointment"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-600 mt-3 text-center">
                ✅ Appointment request submitted successfully!
              </p>
            )}
          </form>
        </motion.div>

        {/* Right Side - Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Visit Our Dental Clinic
          </h3>
          <p className="text-gray-600 mb-6">
            Experience top-notch dental care with our team of experts in a relaxing environment.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <MapPin className="text-blue-600" /> 123 Smile Street, Your City
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-blue-600" /> +91 99999 99999
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-blue-600" /> contact@dentcareclinic.com
            </p>
          </div>

          <div className="mt-8">
            <iframe
              title="clinic-map"
              src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
