"use client";

import React, { useState } from "react"
import Image from "next/image"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const HeroSection = () => {

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">

        <div className="md:mt-2 md:w-1/2">
          <Image
            src={hovered ? '/assets/images/headshot-with-glasses.png' : '/assets/images/headshot.png'}
            alt=""
            width={325}
            height={325}
            className="rounded-lg shadow-2xl"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
          />
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Esteban Toro!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "} a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Manizales, Colombia. I&#39;m more into solutions than technologies.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a href="https://github.com/softEsteban" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/softesteban/?locale=en_US/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default HeroSection
