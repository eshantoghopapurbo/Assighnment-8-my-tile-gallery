"use client";

import { ShieldCheck, Zap, Users, Headphones } from "lucide-react";

const ChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted & Secure",
      desc: "We maintain the highest level of security and trust for our clients.",
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Performance",
      desc: "Optimized solutions to ensure speed and efficiency in every step.",
    },
    {
      icon: <Users size={28} />,
      title: "Expert Team",
      desc: "Our professionals bring years of industry experience.",
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Support",
      desc: "Dedicated support team ready to assist you anytime.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-6">
            We combine innovation, experience, and dedication to deliver the
            best solutions for your business growth. Our approach ensures quality,
            reliability, and long-term success.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Customer-focused approach</li>
            <li>✔ Scalable and modern solutions</li>
            <li>✔ Proven track record</li>
          </ul>
        </div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-gray-50 hover:bg-blue-50 hover:shadow-lg transition duration-300"
            >
              <div className="text-blue-600 mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;