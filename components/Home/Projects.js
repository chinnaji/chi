import React, { useEffect, useRef } from "react";
import shodex_garden from "../../images/shodex_garden.png";
import portfolio from "../../images/portfolio.png";
import androidpillNew from "../../images/androidpill.png";
import moviemon from "../../images/moviemon.png";
import pikchaw from "../../images/pikchaw.png";
import grupr from "../../images/grupr.png";
import mano from "../../images/mano.png";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const title = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (title.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(title.current, {
          duration: 700,
          move: 0,
        });
        sr().reveal(".projects", { delay: 400, interval: 50 });
        sr().reveal(
          ".project-title",
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
  const projects = [
    {
      img: grupr,
      url: "/works/#grupr",
      text: "Grupr",
    },
    // {
    //   img: mano,
    //   url: "/works/#mano",
    //   text: "Mano",
    // },
    {
      img: androidpillNew,
      url: "/projects/#mobigoat",
      text: "Mobigoat",
    },
    // {
    //   img: shodex_garden,
    //   url: "/projects/#shodex_garden",
    //   text: "Shodex Garden",
    // },

    {
      img: pikchaw,
      url: "/projects/#pikchaw",
      text: "Pikchaw",
    },
  ];
  return (
    <section
      id="projects"
      className={`w-full  bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-5 mt-16`}
    >
      <div className="px-2 py-8 max-w-6xl	gay-y-5 mx-auto flex flex-wrap  ">
        <div className="w-full text-center pt-7 mb-10">
          <h2 className="lg:text-5xl text-4xl" ref={title}>
            Featured Works
          </h2>
        </div>
        {projects.map((work, index) => (
          <div
            className="w-full  md:w-1/2  md:text-left md:p-5 p-3 hover:-mt-2 transition-all ease-linear duration-200  overflow-hidden"
            key={index}
          >
            <section className="projects cursor-pointer my-10">
              <Link href={work.url} passHref>
                <a className="rounded-lg   w-fit  relative hover:text-lime-500 ">
                  <Image
                    src={work.img}
                    // layout="fill"
                    objectFit="cover"
                    // priority
                    loading="eager"
                    alt="my avatar"
                    className="rounded z-[5] "
                    placeholder="blur"
                  />
                  <h3 className="project-title ml-2 my-5 text-3xl">
                    {" "}
                    {index + 1}. {work.text}
                  </h3>
                </a>
              </Link>
            </section>
          </div>
        ))}
      </div>
      <div className="text-center w-full">
        {/* <Link href="/projects" passHref>
          <a className=" mb-12 mt-8 w-fit  mx-auto  flex px-10 text-sm py-3   bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
            <span className="mr-2 font-semibold">See More</span>
        
          </a>
        </Link> */}
        {/* <a
          href="https://github.com/chinnaji?tab=repositories"
          className=" mb-12 mt-8 w-fit  mx-auto  flex px-10 text-sm py-3   bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in"
        >
          <span className="mr-2 font-semibold">See More</span>
        </a> */}
      </div>
    </section>
  );
}

export default Projects;
