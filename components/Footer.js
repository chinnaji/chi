import React from "react";
import Link from "next/link";
import {
  BsTwitter,
  BsYoutube,
  BsFillEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full border-t dark:border-t-zinc-500  bg-zinc-50 dark:bg-dark-600 text-zinc-600 dark:text-zinc-100">
      <section className="px-2 py-8 max-w-5xl mx-auto ">
        <div className="flex justify-center items-center w-full">
          <a href="https://twitter.com/ChibuikeNnaji100">
            <BsTwitter className="text-3xl hover:text-lime-500  transition-all ease-in-out mx-3" />
          </a>
          <a href="https://youtube.com/c/Androidpill">
            <BsYoutube className="text-3xl hover:text-lime-500  transition-all ease-in-out mx-3" />
          </a>
          <a href="https://github.com/chinnaji">
            <BsGithub className="text-3xl hover:text-lime-500  transition-all ease-in-out mx-3" />
          </a>
          <a href="mailto:chibuikennaji306@gmail.com">
            <BsFillEnvelopeFill className="text-3xl hover:text-lime-500  transition-all ease-in-out mx-3" />
          </a>
          <a href="www.linkedin.com/in/chinnaji">
            <BsLinkedin className="text-3xl hover:text-lime-500  transition-all ease-in-out mx-3" />
          </a>
        </div>
        <div className="text-center text-sm mt-5">
          2022 Nnaji Chibuike. All rights reserved
        </div>
      </section>
    </footer>
  );
}

export default Footer;
