"use client";
import React, { JSX, useEffect, useState } from "react";
import { FaPencilRuler, FaCode, FaPuzzlePiece, FaTools } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  FaPencilRuler: <FaPencilRuler />,
  FaCode: <FaCode />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  FaTools: <FaTools />,
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          {services.map((service: any, index: number) => (
            <div key={index} className="service-card">
              <div className="service-icon">{iconMap[service.icon]}</div>
              <h3 className="service-heading">{service.title}</h3>
              <ul className="service-list">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
