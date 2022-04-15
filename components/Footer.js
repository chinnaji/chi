import React from "react";
import Link from "next/link";
import {
  BsTwitter,
  BsYoutube,
  BsFillEnvelopeFill,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full border-t dark:border-t-zinc-500  bg-zinc-50 dark:bg-dark-600 text-zinc-600 dark:text-zinc-100">
      <section className="px-2 py-8 max-w-5xl mx-auto ">
        <div className="flex justify-center items-center w-full">
          <a href="https://twitter.com/@ChibuikeNnaji10">
            <BsTwitter className="text-xl mx-3" />
          </a>
          <a href="https://youtube.com/c/Androidpill">
            <BsYoutube className="text-xl mx-3" />
          </a>
          <a href="https://github.com/Max1583">
            <BsGithub className="text-xl mx-3" />
          </a>
          <a href="mailto:chibuikennaji306@gmail.com">
            <BsFillEnvelopeFill className="text-xl mx-3" />
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
