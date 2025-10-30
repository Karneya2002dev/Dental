import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-primary">DentCare Clinic</h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Providing trusted and gentle dental care for every smile.  
            Visit us for world-class dental treatments and exceptional care.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/team" className="hover:text-primary">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>General Dentistry</li>
            <li>Cosmetic Dentistry</li>
            <li>Orthodontics (Braces)</li>
            <li>Teeth Whitening</li>
            <li>Dental Implants</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1" />
              <span>
                123 Smile Avenue,<br />
                Chennai, India 600001
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> 
              <a href="tel:+919876543210" className="hover:text-primary">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> 
              <a href="mailto:info@dentcare.com" className="hover:text-primary">
                info@dentcare.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-8" />

      {/* Bottom Section */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} DentCare Clinic. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
