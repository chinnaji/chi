import React, { useEffect, useRef } from "react";
import Image from "next/image";
import me from "../../images/me.jpg";
import avatar from "../../images/avatar.png";
import { ImBriefcase } from "react-icons/im";

import {
  BsTwitter,
  BsYoutube,
  BsFillEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function Hero() {
  const title = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (title.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(title.current, {
          duration: 5000,
          move: 0,
        });
        sr().reveal(".socials", { delay: 1000, interval: 200 });
        sr().reveal(".title2", {
          delay: 200,
          duration: 5000,
          move: 0,
        });
      }
    }
    animate();
  }, []);

  return (
    <section className="relative flex items-center justify-center mt-10 pt-24 p-5 md:min-h-[calc(100vh-13rem)] min-h-[calc(100vh-17rem)] ">
      <div className="max-w-[800px]  text-center mx-auto text-zinc-100">
        <h1 ref={title} className="text-6xl">
          Hello, I&apos;m Nnaji Chibuike,
        </h1>
        <h2 className=" title2 text-3xl md:text-4xl mt-2 md:mt-5 text-lime-500  ">
          A Software Engineer.
        </h2>

        {/* social icons */}
        <div className="text-2xl mt-12 flex justify-center gap-x-7 items-center w-full">
          <a className="socials" href="https://twitter.com/ChibuikeNnaji100">
            <BsTwitter className=" hover:text-lime-500  transition-all ease-in-out" />
          </a>
          <a className="socials" href="https://youtube.com/c/Androidpill">
            <BsYoutube className=" hover:text-lime-500  transition-all ease-in-out" />
          </a>
          <a className="socials" href="https://github.com/chinnaji">
            <BsGithub className=" hover:text-lime-500  transition-all ease-in-out" />
          </a>
          <a className="socials" href="mailto:chibuikennaji306@gmail.com">
            <BsFillEnvelopeFill className=" hover:text-lime-500  transition-all ease-in-out" />
          </a>
          <a className="socials" href="https://www.linkedin.com/in/chinnaji">
            <BsLinkedin className=" hover:text-lime-500  transition-all ease-in-out" />
          </a>
        </div>
      </div>

      {/* blur items */}
      <div className="blur-[90px] md:w-32 md:h-32 w-16 h-16 rounded-full bg-lime-500  absolute top-[130px] left-10"></div>
      {/* <div className="blur-[130px] opacity-30 md:w-32 md:h-32 w-16 h-16 rounded-full bg-yellow-500  fixed top-[130px] left-10"></div> */}
      <div className="blur-[90px] md:w-32 md:h-32 w-16 h-16 rounded-full bg-lime-500  absolute bottom-[130px] right-10"></div>
    </section>
  );
}

export default Hero;
