import React from "react";
import Image from "next/image";
import justweb_logo from "../../images/justweb.png";
import algg from "../../images/algg.png";
function Experience() {
  return (
    <section
      //   id="about"
      className={` px-5 w-full max-w-[1100px] mx-auto  bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 md:mt-16 md:py-20`}
    >
      <h2 className="title text-center  font-semibold lg:font-semibold text-zinc-600 text-4xl lg:text-5xl  lg:mt-0 mt-4 mb-16 dark:text-zinc-100">
        My Experience
      </h2>
      <div className="flex  flex-wrap mt-16 max-w-2xl mx-auto w-full">
        <div className="md:w-[20%] w-full">
          <Image
            src={justweb_logo}
            alt="justweb_logos"
            width={100}
            height={30}
          />
        </div>
        <div className="md:w-[80%] w-full">
          <h3 className="text-3xl font-semibold ">Justweb Technologies</h3>
          {/* <p className="text-sm mt-3">A software Development Company</p> */}

          <p className="mt-2 mb-5">
            {" "}
            <b> Front-end Developer </b>
          </p>
          <ul className="font-light  list-disc pl-3	">
            <li>
              Responsible for Translating UI wireframes and mockups to visual
              elements of the application.
            </li>
            <li>
              Researched and Implemented good design practices to ensure
              consistent user experience on any device.
            </li>
            <li>
              Worked with various teams and stakeholders to create and maintain
              digital experiences for multiple company products.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex  flex-wrap mt-16 max-w-2xl mx-auto w-full">
        <div className="md:w-[20%] w-full">
          <Image src={algg} alt="justweb_logos" width={120} height={30} />
        </div>
        <div className="md:w-[80%] w-full">
          <h3 className="text-3xl font-semibold ">Algoralign</h3>
          {/* <p className="text-sm mt-3">A software Development Company</p> */}

          <p className="mt-2 mb-5">
            {" "}
            <b> Front-end Developer </b>
          </p>
          <ul className="font-light  list-disc pl-3	">
            <li>
              Spearheaded the redesign of the user interface, leveraging
              cutting-edge technologies such as React.js to enhance user
              interaction and streamline navigation.
            </li>
            <li>
              Implemented responsive design principles to ensure seamless
              functionality across various devices, resulting in better increase
              in user engagement.
            </li>
            {/* <li>
              Worked with various teams and stakeholders to create and maintain
              digital experiences for multiple company products.
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
