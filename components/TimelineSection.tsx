import React from "react";
import Image from 'next/image';

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      date: "Feb. 2022 - Present",
      title: "Interactivo Grupo Marktel - Data Science and Automation Junior Analyst",
      type: "Full-time Job",
      description: "Assisted a BPO company in automating data extraction and loading processes. Developed bots using Python and Power Automate, and interfaced with IT servers to deploy automations and streamline operational workflows.",
      logo: "/interactivo_grupo_marktel_logo.jpg",
    },
    {
      id: 2,
      date: "Nov. 2023",
      title: "Miella - Team Leader",
      type: "Freelance Project",
      description: "Led a team to create a website showcasing Miella project for Marmato. The website highlighted its history, achievements, and products for Corporación para el Desarrollo de Caldas.",
      logo: "/miella-logo.png",
    },
    {
      id: 3,
      date: "Sept. 2023",
      title: "Sena Soft - Data Engineering Category",
      type: "Software Competition",
      description: "Participated in the Sena Soft 2023 competition in Pereira, Colombia. Built a Data Warehouse emulating a bank database, designed ETLS and OLAP cube, and projected it onto a Power BI dashboard.",
      logo: "/sena-soft.png",
    },
    {
      id: 4,
      date: "Feb. 2022 - Jan. 2023",
      title: "TITANT INGENIERÍA - Fullstack Development Team Leader & Fullstack Junior Developer",
      type: "Full-time Job",
      description: "Contributed to the entire software development lifecycle, from understanding client needs to leading software developers to meet sprints. Developed databases, web APIs, and integrated applications with services.",
      logo: "/titanq_ingenieria_logo.jpg",
    },
    {
      id: 5,
      date: "Dec. 2021 - Jan. 2022",
      title: "Dataope",
      type: "Part-time Job",
      description: "Handled BPO data extraction and created process manuals for the team.",
      logo: "/dataope_logo.jpg",
    }
    
  ];

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Timeline
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-col">
            {timelineEvents.map((event) => (
              <div key={event.id} className="py-4 md:py-8">
                <div className="mb-4 flex flex-col md:flex-row items-center">
                  <Image
                    className="m-4 rounded-lg"
                    src={event.logo}
                    alt={`Logo ${event.title}`}
                    width={100}
                    height={100}
                  />
                  <div className="md:pl-4">
                    <span className="font-bold">{event.date}</span>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-700 pb-2">{event.description}</p>
                    <p className="text-gray-700 font-semibold">{event.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
