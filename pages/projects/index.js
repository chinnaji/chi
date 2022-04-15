import React from "react";
import Image from "next/image";
import Link from "next/link";
import shodex from "../../images/shodex_garden.png";
import portfolio from "../../images/portfolio.png";
function index() {
  const projects = [
    {
      title: "Shodex Garden",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis, earum ipsam aspernatur minima neque explicabo eaque Reprehenderit delectus perspiciatis vitae neque facilis laboretempora unde, maxime voluptate delenit",
      image: shodex,
      id: "shodex_garden",
    },
    {
      title: "My Portfolio",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis, earum ipsam aspernatur minima neque explicabo eaque Reprehenderit delectus perspiciatis vitae neque facilis laboretempora unde, maxime voluptate delenit",
      image: portfolio,
      id: "portfolio",
    },
  ];
  return (
    <section className=" bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 m-0">
      <div className="w-full text-center pt-3 mb-2 mt-7">
        <h2 className="text-4xl">Recent Projects</h2>
      </div>
      <div className="max-w-6xl mx-auto">
        {projects.map((work, index) => (
          <div
            className={`w-full ${
              index !== projects.length - 1
                ? "border-b dark:border-b-zinc-500"
                : null
            }  py-10 my-10`}
            key={index}
            id={work.id}
          >
            <div className="w-full md:w-1/2 mx-auto">
              <div className="  w-full  h-full relative p-2 pb-0">
                <Image
                  src={work.image}
                  //   layout="fill"
                  priority={index === 0 ? true : false}
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
                <div className=" rounded filter-none w-9/12 h-full p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
                  {" "}
                </div>{" "}
              </div>
            </div>
            <div className="w-full  p-2">
              <h2 className="text-3xl mb-4 mt-10 text-lime-500">
                {index + 1}. {work.title}
              </h2>
              <p>{work.description} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default index;
