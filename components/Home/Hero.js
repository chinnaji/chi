import React from "react";
import Image from "next/image";
import me from "../../images/me.jpg";
import { ImBriefcase } from "react-icons/im";
function Hero() {
  return (
    <section
      className={`w-full md:h-[calc(100vh-4rem)] z-20 overflow-x-hidden bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 `}
    >
      <div className="max-w-[1200px] mx-auto  h-full flex flex-wrap px-5">
        <div className="z-30 w-full lg:w-1/2 flex justify-center items-center">
          <div>
            <h1 className=" text-center lg:text-left font-semibold lg:font-semibold text-zinc-600 text-4xl lg:text-5xl max-w-xl lg:mt-0 mt-24 dark:text-zinc-100">
              Hello 👋,
              <br />{" "}
              <span className="block my-3">
                I&apos;m
                <span className="text-lime-500 "> Nnaji Chibuike </span>,
              </span>{" "}
              A Web Developer.
            </h1>
            <p className="text-zinc-500 text-base dark:text-zinc-50  mt-5 text-center lg:text-left">
              I an an enthusiastic developer currently focused on frontend web
              development and giving users a better experience.
            </p>
            <div>
              <a
                href="#contact"
                className="w-fit  mx-auto lg:mx-0  items-center justify-center flex px-12 text-base py-3  my-6 lg:my-9 bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in"
              >
                <span className="mr-2 font-semibold">Hire Me</span>
                <span>
                  <ImBriefcase className="text-xl" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex lg:justify:end justify-center items-center -mt-16 md:-mt-0 ">
          <div className="w-fit h-fit p-2 rounded-lg relative ">
            <div className="p-2  mt-10  lg:mt-0 lg:w-[420px] w-80 lg:h-96 h-72 relative lg:rounded-tl-[150px] lg:rounded-tr-[50px] lg:rounded-br-[150px] lg:rounded-bl-[40px]">
              <Image
                src={me}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
                alt="my avatar"
                className="z-10"
                placeholder="blur"
              />
            </div>

            {/* <div className="w-16 md:h-32 absolute left-16  top-[-80px]  rounded-t-full rounded-b-none hidden lg:block">
              <Image
                src={heroImg1}
                layout="responsive"
                objectFit="cover"
                alt="hero background image"
                className="rounded-full"
                // placeholder="blur"
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* blur items */}
      <div className="blur-[90px] md:w-32 md:h-32 w-16 h-16 rounded-full bg-lime-500  absolute top-[130px] left-10"></div>
      {/* <div className="blur-[130px] opacity-30 md:w-32 md:h-32 w-16 h-16 rounded-full bg-yellow-500  fixed top-[130px] left-10"></div> */}
      <div className="blur-[90px] md:w-32 md:h-32 w-16 h-16 rounded-full bg-lime-500  absolute bottom-[130px] right-10"></div>
      {/* <div className="blur-[120px] md:w-32 md:h-32 w-16 h-16 rounded-full bg-lime-500  fixed bottom-[130px] right-[40%]"></div> */}
    </section>
  );
}

export default Hero;
