import React from "react";
import shodex_garden from "../../images/shodex_garden.png";
import portfolio from "../../images/portfolio.png";
import androidpillNew from "../../images/androidpill.png";
import moviemon from "../../images/moviemon.png";
import pikchaw from "../../images/pikchaw.png";
import grupr from "../../images/grupr.png";
import Image from "next/image";
import Link from "next/link";
function Projects() {
  const projects = [
    {
      img: grupr,
      url: "/projects/#grupr",
      text: "Grupr",
    },
    {
      img: androidpillNew,
      url: "/projects/#androidpill",
      text: "Androidpill",
    },
    {
      img: shodex_garden,
      url: "/projects/#shodex_garden",
      text: "Shodex Garden",
    },

    // {
    //   img: moviemon,
    //   url: "/projects/#moviemon",
    //   text: "Moviemon",
    // },
    {
      img: pikchaw,
      url: "/projects/#pikchaw",
      text: "Pikchaw",
    },
    // {
    //   img: portfolio,
    //   url: "/projects/#portfolio",
    //   text: "My Portfolio",
    // },
    // {
    //   img: shodex_garden,
    //   url: "/projects/#whatsapp_clone",
    //   text: "Shodex Garden",
    // },
    // {
    //   img: shodex_garden,
    //   url: "/projects/#shodex_garden",
    //   text: "Shodex Garden",
    // },
  ];
  return (
    <section
      id="projects"
      className={`w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-5 mt-16`}
    >
      <div className="px-2 py-8 max-w-6xl	gay-y-5 mx-auto flex flex-wrap  ">
        <div className="w-full text-center pt-7 mb-10">
          <h2 className="lg:text-5xl text-4xl">Featured Projects</h2>
        </div>
        {projects.map((work, index) => (
          <div
            className="w-full  md:w-1/2  md:text-left md:p-5 p-3 hover:-mt-3 transition-all ease-linear duration-200  overflow-hidden"
            key={index}
          >
            <section className="cursor-pointer my-10">
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
                  <h3 className=" ml-2 my-5 text-3xl">
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
