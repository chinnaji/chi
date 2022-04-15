import React from "react";
import Image from "next/image";
import me from "../../images/me2.jpg";
function About() {
  return (
    <section
      id="about"
      className={`w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-10`}
    >
      <div className="max-w-6xl	 mx-auto   h-full flex flex-wrap px-5">
        <div className="w-full lg:w-1/2 flex  justify-center items-center  md:-mt-0 ">
          <div className="  w-fit rounded-lg relative ">
            <div className="rounded-lg  p-2 filter grayscale  lg:-mt-20 lg:w-[420px] w-80 lg:h-96 h-72 relative ">
              <div className=" filter-none w-9/12 h-full p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
                {" "}
              </div>{" "}
              <Image
                src={me}
                // layout="fill"
                objectFit="cover"
                // priority
                // loading="eager"
                alt="my avatar"
                className=" "
                // placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="order-first md:order-last w-full lg:w-1/2 flex  justify-center items-center">
          <div>
            <h1 className=" text-center lg:text-left font-semibold lg:font-semibold text-zinc-600 text-4xl lg:text-5xl max-w-xl lg:mt-0 mt-24 dark:text-zinc-100">
              I&apos;m Nnaji Chibuike,
              <br />{" "}
              <span className="block mt-2">
                <span className="text-lime-500 ">
                  Frontend Developer & Designer{" "}
                </span>{" "}
                from Lagos State, Nigeria.
              </span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-50 text-sm mt-8 text-center lg:text-left">
              I have rich experience in web site design, development and
              customization. Also I am good at html, css, javascript, React,
              Next Js,Node Js,wordpress, Mongo DB, Tailwind and many more. I
              love to talk with you about our unique approach. Feel free to
              contact me writing an email with your project idea.
            </p>
            <div>
              <a download href="https://bit.ly/chi_nnaji_resume">
                <button className=" mb-12 mt-5 mx-auto lg:mx-0 flex px-7 text-sm py-3  my-2 lg:my-12 bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
                  <span className="mr-2 font-semibold">Download Resume</span>
                  {/* <span>
            <BsArrowRightShort className="text-2xl" />
          </span> */}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
