import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    name: "CV Builder",
    description:
      "An Angular-based web app generating PDF CVs from form data, leveraging Angular and Bootstrap.",
    image: "/assets/images/cv-builder.png",
    current: true,
    github: "https://github.com/softEsteban/cv-builder-pdfmake",
    link: "https://softesteban.github.io/cv-builder-pdfmake/",
    technologies: [
      "/assets/logos/angular-logo.png",
      "/assets/logos/bootstrap-logo.png"
    ]
  },
  {
    name: "Finances APP",
    description:
      "Tired of managing finances via Excel, I developed an app with Next.js and MongoDB. An ongoing project for efficient personal finance tracking.",
    image: "/assets/images/finances-app.png",
    current: true,
    github: "https://github.com/softEsteban/finances-app",
    link: "",
    technologies: [
      "/assets/logos/next-logo.jpg",
      "/assets/logos/react-logo.png",
      "/assets/logos/mongo-db-logo.png",
    ]
  },
  {
    name: "My Portfolio APP",
    description:
      "This portfolio, built using Next.js, is where I showcase my skills and projects in a sleek, user-friendly interface.",
    image: "/assets/images/portafolio-app.png",
    current: false,
    github: "https://github.com/softEsteban/my-portfolio",
    link: "",
    technologies: [
      "/assets/logos/next-logo.jpg",
      "/assets/logos/react-logo.png"
    ]
  },
  {
    name: "Email Parser API",
    description:
      "NestJS powers the Email Parser API, efficiently extracting JSON data from EML files, enabling seamless extraction from attachments, body URLs, and sub-URLs.",
    image: "/assets/images/email-parser-api.png",
    current: false,
    github: "https://github.com/softEsteban/email-parser-api",
    link: "https://email-parser-api.onrender.com/api",
    technologies: [
      "/assets/logos/nestjs-logo.png",
      "/assets/logos/swagger-logo.png"
    ]
  },
  {
    name: "Mantis Bugtracker API",
    description:
      "A comprehensive Angular, NestJS, and PostgreSQL app for managing a fictional software development company. Utilizes Swagger for smooth frontend integration, JWT authentication, TypeORM for PostgreSQL mapping, and Chat-GPT integration.",
    image: "/assets/images/mantis-bugtracker-api.png",
    current: false,
    github: "https://github.com/softEsteban/bugtracker-api",
    link: "",
    technologies: [
      "/assets/logos/nestjs-logo.png",
      "/assets/logos/postgresql-logo.png",
      "/assets/logos/swagger-logo.png",
      "/assets/logos/jwt-logo.png"
    ]
  },
  {
    name: "Mantis Bugtracker APP",
    description:
      "The frontend for the Mantis API, built with Ng-Zorro CSS framework, incorporating Firebase file integration, a drag-and-drop Kanban board, Chat-GPT interface, and an internal chat.",
    image: "/assets/images/mantis-bugtracker-app.png",
    current: false,
    github: "https://github.com/softEsteban/bugtracker-app",
    link: "",
    technologies: [
      "/assets/logos/angular-logo.png",
      "/assets/logos/ng-zorro-logo.png"
    ]
  },
  {
    name: "Computrabajo Webscraper",
    description:
      "Python-based scraper for extracting Computrabajo openings, saving time by automating the extraction process.",
    image: "/assets/images/computrabajo-webscraper.png",
    current: false,
    github: "https://github.com/softEsteban/computrabajo-webscraper",
    link: "",
    technologies: [
      "/assets/logos/python-logo.png"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-24">
      <h1 className="my-12 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <p className="pb-12 text-center text-lg lg:text-xl leading-7 mb-8 lg:mb-10 text-neutral-600 dark:text-neutral-400">
        This is my journey through learning software development to become an Indie Creator!
      </p>
      <div className="flex flex-col space-y-8 md:space-y-12">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
                  <div className="md:w-1/2 mb-4">
                    <Link href={project.link} target="_blank" >
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={300}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>

                  <div className="md:w-1/2">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">{project.name}</h1>

                    {project.current && (
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-full absolute top-4 left-4 shadow-md flex items-center transition duration-300">
                        <FaCheckCircle className="mr-2" /> Current
                      </span>
                    )}
                    <p className="text-lg lg:text-xl leading-7 mb-4 lg:mb-6 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row items-center space-x-4">
                      <Link href={project.github} target="_blank">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:-translate-y-1 transition-transform">
                          <BsGithub size={30} />
                        </div>
                      </Link>
                      {project.link !== "" && (
                        <Link href={project.link} target="_blank">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:-translate-y-1 transition-transform">
                            <BsArrowUpRightSquare size={30} />
                          </div>
                        </Link>
                      )}
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="w-12 h-12">
                          <Image
                            src={tech}
                            alt="Tech"
                            width={48}
                            height={48}
                            className="object-contain rounded-md hover:opacity-70 cursor-pointer hover:-translate-y-1 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
