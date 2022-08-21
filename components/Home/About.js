import React, { useEffect, useRef } from "react";
import Image from "next/image";
import me from "../../images/me2.jpg";
function About() {
  const title = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (title.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(title.current, {
          duration: 700,
          move: 0,
        });
        sr().reveal(".me", { delay: 700, origin: "left" });
        sr().reveal(
          ".about-content",
          {
            duration: 500,
            scale: 1,
            distance: "20px",
            origin: "bottom",
            reset: false,
            easing: "ease-out",
            viewFactor: 1,
          },
          75
        );
      }
    }
    animate();
  }, []);
  return (
    <section
      id="about"
      className={` w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 md:mt-16 md:py-20`}
    >
      <div className="max-w-6xl	 mx-auto   h-full flex flex-wrap px-5">
        <div className="me w-full lg:w-1/2 flex  justify-center items-center  md:-mt-0 ">
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

        <div className="about-content order-first md:order-last w-full lg:w-1/2 flex  justify-center items-center">
          <div>
            <h2
              ref={title}
              className="title text-center md:text-left font-semibold lg:font-semibold text-zinc-600 text-4xl lg:text-5xl max-w-xl lg:mt-0 mt-24 dark:text-zinc-100"
            >
              {/* I&apos;m Nnaji Chibuike,
              <br />{" "}
              <span className="block mt-2">
                <span className="text-lime-500 ">
                  Frontend Developer & Designer{" "}
                </span>{" "}
                from Lagos State, Nigeria.
              </span> */}
              About Me!
            </h2>
            <p className="text-zinc-500 dark:text-zinc-50 text-base  mb-3 mt-8 text-center lg:text-left">
              {/* I have rich experience in web design and development using cool
              tools like html, css, javascript, React, Typescript,Node
              Js,wordpress, Mongo DB, Tailwind and many more. I love to talk
              with you about my unique approach to solving web related problems.
              Feel free to contact me writing an email with your project idea. */}
              Hello Again, Thanks for scrolling this far!! 🤗,I&apos;m a
              Software Engineer currently based in Lagos, Nigeria🌳. I describe
              myself as a passionate developer who loves accessible software
              products.🌑🕶
            </p>
            <p className="md:text-left text-center">
              I love exploring new technologies and staying on top of latest
              trends. I love Javascript....obviously 🤪.
            </p>
            <p className="mt-3 md:text-left text-center">
              Check out my resume for more 👇
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/1o5AGOxDNZ1-zLGCju7d1ANfG6GmO5up5/view?usp=sharing"
                target="blank"
              >
                <button className=" mb-12 mt-5 mx-auto lg:mx-0 flex px-7 text-sm py-4  my-2 lg:my-12 bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
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
