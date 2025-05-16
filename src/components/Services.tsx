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
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon">
                {iconMap[service.icon] ?? <FaTools />}
              </div>
              <h3 className="service-heading">{service.title}</h3>
              <ul className="service-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
