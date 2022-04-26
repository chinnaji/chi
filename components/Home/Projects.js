import React from "react";
import shodex_garden from "../../images/shodex_garden.png";
import portfolio from "../../images/portfolio.png";
import androidpillNew from "../../images/androidpill.png";
import moviemon from "../../images/moviemon.png";
import Image from "next/image";
import Link from "next/link";
function Projects() {
  const projects = [
    {
      img: shodex_garden,
      url: "/projects/#shodex_garden",
      text: "Shodex Garden",
    },

    {
      img: androidpillNew,
      url: "/projects/#androidpill",
      text: "Androidpill",
    },
    {
      img: moviemon,
      url: "/projects/#moviemon",
      text: "Moviemon",
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
      className={`w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-10`}
    >
      <div className="px-2 py-8 max-w-6xl	 mx-auto flex flex-wrap  ">
        <div className="w-full text-center pt-3 mb-3">
          <h2 className="text-4xl">Featured Projects</h2>
        </div>
        {projects.map((work, index) => (
          <div
            className="w-full lg:w-1/3 md:1/2  md:text-left p-2  overflow-hidden"
            key={index}
          >
            <section className="cursor-pointer my-5">
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
                  <h3 className=" ml-2 my-3 text-xl">
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
        <Link href="/projects" passHref>
          <a className=" mb-12 mt-8 w-fit  mx-auto  flex px-10 text-sm py-3   bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
            <span className="mr-2 font-semibold">See More</span>
            {/* <span>
            <BsArrowRightShort className="text-2xl" />
          </span> */}
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
