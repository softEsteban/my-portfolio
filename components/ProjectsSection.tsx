import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Mantis Bugtracker API",
    description:
      "Mantis Bugtracker is an Angular, NestJS, and PostgreSQL app to handle a fictional software development company. This specific API uses Swagger to create a smooth frontend integration, JWT authentication to protect its endpoints, TypeORM to map the PostgreSQL database, and it has a Chat-GPT integration.",
    image: "/mantis-bugtracker-api.png",
    github: "https://github.com/softEsteban/bugtracker-api",
    link: "",
  },
  {
    name: "Mantis Bugtracker APP",
    description:
      "Mantis Bugtracker App is the frontend side of Mantis API implemented with Ng-Zorro CSS framework. It has files integration with Firebase, a drag-and-drop Kanban board, the Chat-GPT chat interface, and an internal chat.",
    image: "/mantis-bugtracker-app.png",
    github: "https://github.com/softEsteban/bugtracker-app",
    link: "",
  },
  {
    name: "CV Builder",
    description:
      "CV Builder is an Angular-based web app that generates a PDF with your CV based on the form data.",
    image: "/cv-builder.png",
    github: "https://github.com/softEsteban/cv-builder-pdfmake",
    link: "https://softesteban.github.io/cv-builder-pdfmake/",
  },
  {
    name: "Computrabajo Webscraper",
    description:
      "Computrabajo Webscraper is a Python scraper to extract Computrabajo openings based on my filter. It allows me to save time going to the website and manually extracting.",
    image: "/computrabajo-webscraper.png",
    github: "https://github.com/softEsteban/computrabajo-webscraper",
    link: "",
  }
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-24">
      <h1 className="my-12 pb-12 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-8 md:space-y-12">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
                  <div className="md:w-1/2 mb-4">
                    <Link href={project.link}>
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
                    <p className="text-lg lg:text-xl leading-7 mb-4 lg:mb-6 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link !== "" && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
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
