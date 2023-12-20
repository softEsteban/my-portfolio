import Image from "next/image";
import React from "react";

const CurriculumVitaeSection = () => {
  const englishCVUrl = "/CV ESTEBAN TORO EN.pdf";
  const spanishCVUrl = "/CV ESTEBAN TORO SP.pdf";

  return (
    <section id="cv" className="py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Column for CV Image */}
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          {/* Replace 'cv_image.png' with the actual path to your CV image */}
          <Image
            className="rounded-lg hover:scale-105 transition duration-300"
            src="/cv-image.png"
            alt="Curriculum Vitae"
            width={300}
            height={166}
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Want me in your team?</h2>
          <h3 className="text-2xl text-gray-600 mb-6">Contact me and let&#39;s talk about it!</h3>

          <div className="flex space-x-4">
            <a href={englishCVUrl} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" download>
              Download English CV
            </a>
            <a href={spanishCVUrl} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" download>
              Descargar CV en Español
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumVitaeSection;
