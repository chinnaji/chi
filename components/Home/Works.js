import React from "react";
import shodex_garden from "../../images/shodex_garden.png";
import Image from "next/image";
import Link from "next/link";
function Works() {
  const works = [
    {
      img: shodex_garden,
      url: "/works/shodex",
    },
    {
      img: shodex_garden,
      url: "/works/shodex1",
    },
    {
      img: shodex_garden,
      url: "/works/shodex2",
    },
  ];
  return (
    <section
      id="about"
      className={`w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-10`}
    >
      <div className="px-2 py-8 max-w-6xl	 mx-auto flex flex-wrap  ">
        <div className="w-full text-center pt-3 mb-3">
          <h2 className="text-4xl">Recent Works</h2>
        </div>
        {works.map((work, index) => (
          <div
            className="w-full lg:w-1/3 text-center md:text-left p-2 "
            key={index}
          >
            <section className="cursor-pointer ">
              <Link href={work.url} passHref>
                <div className="rounded-lg   w-fit  relative ">
                  <Image
                    src={work.img}
                    // layout="fill"
                    objectFit="cover"
                    // priority
                    loading="eager"
                    alt="my avatar"
                    className="rounded z-[5]"
                    placeholder="blur"
                  />
                </div>
              </Link>
            </section>
          </div>
        ))}
      </div>
      <div className="text-center w-full">
        <Link href="/works" passHref s>
          <button className=" mb-12  mx-auto  flex px-10 text-sm py-3   bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
            <span className="mr-2 font-semibold">See More</span>
            {/* <span>
            <BsArrowRightShort className="text-2xl" />
          </span> */}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Works;
