import React from "react";
import Image from "next/image";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const ServicesSection = () => {
  const services = [
    {
      title: "Technological Consultancy",
      description: "Expert guidance on technological solutions and strategies.",
      icon: "/undraw_interview.png",
    },
    {
      title: "Requirements Gathering",
      description: "Collecting, analyzing, and documenting project requirements.",
      icon: "/undraw_filing_system.png",
    },
    {
      title: "Database Development",
      description: "Designing and implementing databases tailored to your needs.",
      icon: "/undraw_server.png",
    },
    {
      title: "APIs & Integrations Development",
      description: "Creating and integrating APIs for seamless interactions.",
      icon: "/undraw_design_components.png",
    },
    {
      title: "Web Applications Development",
      description: "Building robust and user-friendly web applications.",
      icon: "/undraw_responsive.png",
    },
  ];

  return (
    <section id="services" className="py-10">
      <h1 className="my-10 text-center font-bold text-4xl">
        Services
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="max-w-md bg-white rounded-md shadow-md p-6 flex">
            <div className="w-1/3 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center pl-6">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
