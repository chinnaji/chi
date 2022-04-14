import React from "react";
import { FaPaperPlane } from "react-icons/fa";
function Contact() {
  return (
    <section
      id="works"
      className={`w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  py-10`}
    >
      <form className="px-2 my-5 max-w-6xl	 mx-auto flex flex-wrap ">
        <div className="w-full text-center pt-3 mb-6">
          <h2 className="text-4xl">Contact Me</h2>
        </div>

        <div className="w-full p-2 md:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="w-full dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
          />
        </div>
        <div className="w-full p-2 md:w-1/2">
          <input
            type="email"
            placeholder="Email"
            className="w-full dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
          />
        </div>
        <div className="w-full p-2 md:w-1/2">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
          />
        </div>
        <div className="w-full p-2 md:w-1/2">
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
          />
        </div>

        <div className="w-full p-2 ">
          <textarea
            placeholder="Message"
            cols="4"
            rows="5"
            className=" dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 w-full p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
          ></textarea>
        </div>
        <div className="w-full p-2 ">
          <button className=" mb-12 mt-5 md:w-fit text-center w-full  mx-auto  flex justify-center items-center px-7 text-sm py-3   bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
            <span className="mr-2 font-semibold">SEND</span>
            <span>
              <FaPaperPlane className="text-xl" />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
