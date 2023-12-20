import React from "react"

const skills = [
  { skill: "Angular" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "CSS" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "C#" },
  { skill: ".NET" },
  { skill: "SQL" },
  { skill: "SQL Server" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "Sonarqube" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "GitLab" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
             
            <br />
            <p>
            Analyst and software developer focused on solutions, passionate about learning new technologies. 
            I have experience leading teams, communicating with clients to understand their needs, and mastering 
            data models to deliver solutions with web tools, databases, analysis, and automation. 
            
            <br />
            <br />

            I solve problems using diagramming and analysis techniques and can integrate systems efficiently 
            and participate in the entire development lifecycle. My quick learning and communication skills 
            foster efficient collaboration in different work environments.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
