import React from "react";
import { Award, Users, Heart } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg"; // adjust path if needed

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src={heroBg}
            alt="Modern dental clinic interior"
            className="rounded-3xl shadow-2xl w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent rounded-3xl"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-primary">DentCare</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your trusted partner in dental care
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-primary">DentCare</span>, we
              combine cutting-edge technology with compassionate care to deliver
              exceptional dental services. Our experienced team is dedicated to
              making every visit comfortable and ensuring your smile stays
              healthy and beautiful for years to come.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary transition-colors shadow-sm group"
                >
                  <Icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-white transition-colors" />
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
