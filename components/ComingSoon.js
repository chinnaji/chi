import React from "react";

function ComingSoon() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-10 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Coming soon!
        </h1>
        <div className="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
          <div className="">
            <h3 className=" text-2xl md:text-3xl font-bold leading-10 text-gray-800 dark:text-white mb-4 text-center xl:text-left mt-4">
              Subscribe
            </h3>
            <p className="text-base leading-normal text-gray-600 dark:text-gray-200 text-center xl:text-left">
              Get notified when i beging my journey of sharing my knolwedge on
              coding and computer related topics
            </p>
            <form className="flex items-stretch mt-12">
              <input
                required
                className="bg-gray-100 rounded-lg rounded-r-none dark:bg-gray-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-zinc-500 focus:outline-none focus:border-gray-500"
                type="email"
                placeholder="Your Email"
              />
              <button className="w-32 rounded-l-none hover:bg-lime-600 bg-lime-500 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-700">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
