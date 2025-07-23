"use client";
import React, { JSX, useEffect, useState } from "react";
import { FaPencilRuler, FaCode, FaPuzzlePiece, FaTools } from "react-icons/fa";

interface Service {
  title: string;
  icon: string;
  features: string[];
}

const iconMap: Record<string, JSX.Element> = {
  FaPencilRuler: <FaPencilRuler />,
  FaCode: <FaCode />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  FaTools: <FaTools />,
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
  <section className="py-10 bg-[#0e0e1c]" id="services">
    <div className="px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        My Services
      </h2>

      {/* Scrollable Row */}
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[360px] bg-gray-900 text-white rounded-xl shadow-lg p-5 flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl text-purple-400 mb-4">
                {iconMap[service.icon] ?? <FaTools />}
              </div>
              <h3 className="text-lg font-semibold mb-2 truncate">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


};

export default Services;
