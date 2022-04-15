import React from "react";
import Image from "next/image";
import Link from "next/link";
import err from "../images/404.png";
function error() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 flex items-center justify-center">
      <div className=" max-w-6xl  mx-auto flex items-center flex-col justify-center lg:flex-row  px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <div className="  w-full lg:h-96 h-72 relative ">
            <Image
              src={err}
              //   layout="fill"
              priority
              loading="eager"
              alt="404 icon"
              className=" "
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white">
            Looks like you have found the doorway to the great nothing
          </h1>

          <p className="py-2 text-base text-gray-800 dark:text-white">
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>
          <Link href="/" passHref>
            <button className="w-full lg:w-auto my-4 rounded-md px-1 sm:px-16 py-5 bg-lime-500 text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-700 focus:ring-opacity-50">
              Go back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default error;
