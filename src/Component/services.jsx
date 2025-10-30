import React from "react";

import {
  Smile,
  Sparkles,
  Shield,
  Heart,
  Scissors,
  Baby,
  Zap,
  Stethoscope,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description:
        "Comprehensive dental care including routine check-ups, cleanings, fillings, and preventive treatments to maintain optimal oral health.",
      features: [
        "Regular Check-ups",
        "Professional Cleanings",
        "Cavity Fillings",
        "Preventive Care",
      ],
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with advanced cosmetic procedures designed to enhance the appearance of your teeth.",
      features: [
        "Teeth Whitening",
        "Porcelain Veneers",
        "Bonding",
        "Smile Makeovers",
      ],
    },
    {
      icon: Shield,
      title: "Orthodontics",
      description:
        "Straighten your teeth and correct bite issues with modern orthodontic solutions tailored to your needs.",
      features: [
        "Traditional Braces",
        "Clear Aligners",
        "Retainers",
        "Bite Correction",
      ],
    },
    {
      icon: Heart,
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      features: [
        "Single Implants",
        "Multiple Implants",
        "Full Arch Restoration",
        "Bone Grafting",
      ],
    },
    {
      icon: Scissors,
      title: "Oral Surgery",
      description:
        "Expert surgical procedures performed with precision and care in a comfortable environment.",
      features: [
        "Tooth Extractions",
        "Wisdom Teeth Removal",
        "Jaw Surgery",
        "Gum Surgery",
      ],
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description:
        "Specialized dental care for children in a fun, friendly environment that makes visits enjoyable.",
      features: [
        "Children's Check-ups",
        "Fluoride Treatments",
        "Dental Sealants",
        "Early Orthodontics",
      ],
    },
    {
      icon: Zap,
      title: "Emergency Dental Care",
      description:
        "Immediate attention for dental emergencies with same-day appointments available.",
      features: [
        "Urgent Care",
        "Pain Relief",
        "Broken Tooth Repair",
        "24/7 Support",
      ],
    },
    {
      icon: Stethoscope,
      title: "Periodontics",
      description:
        "Specialized treatment for gum disease and maintenance of healthy gums and supporting structures.",
      features: [
        "Gum Disease Treatment",
        "Deep Cleaning",
        "Gum Grafting",
        "Maintenance Care",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-6 py-16 bg-linear-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive dental solutions tailored to your unique needs,
              delivered with expertise and care.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-600 transition-all">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-2 pl-16">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="mt-6 pl-16">
                    <button className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-blue-50">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600">
              Book an appointment today and take the first step towards a
              healthier, more beautiful smile.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Book Your Appointment
            </button>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Services;
