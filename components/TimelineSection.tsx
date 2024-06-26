import React from "react";
import Image from 'next/image';

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      date: "Feb. 2022 - Present",
      title: "Interactivo Grupo Marktel - Data Science and Automation Junior Analyst & Software Engineer",
      subtitle: "Data Science and Automation Junior Analyst",
      type: "Full-time Job",
      description: "Assisted a BPO company in automating data extraction and loading processes. Developed bots using Python and Power Automate, and interfaced with IT servers to deploy automations and streamline operational workflows. Work in IT department to build web and automation solutions.",
      links: {},
      logo: "/assets/logos/interactivo-grupo-marktel-logo.jpg",
      tags: ["Python", "Power Automate", "Data Extraction", "Speech Analytics", "Automation design and development", "Nextjs"]
    },
    {
      id: 2,
      date: "Nov. 2023",
      title: "Miella",
      subtitle: "Team Leader",
      type: "Freelance Project",
      description: "Led a team to create a website showcasing Miella project for Marmato. The website highlighted its history, achievements, and products for Corporación para el Desarrollo de Caldas.",
      links: { label: "Check it out!", url: "http://miella.com.co/" },
      logo: "/assets/logos/miella-logo.png",
      tags: ["Leadership", "Web Development", "Project Management"]
    },
    {
      id: 3,
      date: "Sept. 2023",
      title: "Sena Soft",
      subtitle: "Data Engineering Category",
      type: "Software Competition",
      description: "Participated in the Sena Soft 2023 competition in Pereira, Colombia. Built a Data Warehouse emulating a bank database, designed ETLS and OLAP cube, and projected it onto a Power BI dashboard.",
      links: { label: "Check the LinkedIn post I made about it!", url: "https://www.linkedin.com/posts/softesteban_sena-senasoft2023-qvision-activity-7113503895057772544-Q2M-?utm_source=share&utm_medium=member_desktop" },
      logo: "/assets/logos/sena-soft.png",
      tags: ["Data Engineering", "ETL", "Power BI", "OLAP", "SQL Server"]
    },
    {
      id: 4,
      date: "Feb. 2022 - Jan. 2023",
      title: "TITANT INGENIERÍA",
      subtitle: "Fullstack Development Team Leader & Fullstack Junior Developer",
      type: "Full-time Job",
      description: "Contributed to the entire software development lifecycle, from understanding client needs to leading software developers to meet sprints. Developed databases, web APIs, and integrated applications with services.",
      links: {},
      logo: "/assets/logos/titanq-ingenieria-logo.jpg",
      tags: ["Fullstack Development", "Team Leadership", "APIs", "Angular", "Nextjs", ".NET Cores", "PostegreSQL"]
    },
    {
      id: 5,
      date: "Dec. 2021 - Jan. 2022",
      title: "Dataope",
      subtitle: "Freelance Data Consultant",
      type: "Part-time Job",
      description: "Handled BPO data extraction and created process manuals for the team.",
      links: {},
      logo: "/assets/logos/dataope-logo.jpg",
      tags: ["Data Extraction", "Process Documentation", "Consulting"]
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
                <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
                  <div className="p-6 flex flex-col md:flex-row items-center">
                    <Image
                      className="m-4 rounded-lg"
                      src={event.logo}
                      alt={`Logo ${event.title}`}
                      width={100}
                      height={100}
                    />
                    <div className="md:pl-4">
                      <span className="font-bold dark:text-white bg-yellow-200 dark:bg-yellow-600">
                        {event.date}
                      </span>
                      <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
                      {event.subtitle && (
                        <h4 className="text-base text-gray-500 dark:text-gray-300">{event.subtitle}</h4>
                      )}
                      <p className="text-gray-700 dark:text-gray-300 font-semibold mt-2">{event.type}</p>
                      <p className="text-gray-700 dark:text-gray-300 pb-2">{event.description}</p>
                      {event.links && event.links.url && (
                        <a
                          href={event.links.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {event.links.label || "Check it out!"}
                        </a>
                      )}
                      <div className="mt-2">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 mr-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
