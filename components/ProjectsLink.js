import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
function ProjectsLink({ githubUrl, projectUrl }) {
  return (
    <p className="mt-10 flex items-center gap-x-5  justify-center w-full text-4xl">
      <a
        href={githubUrl}
        className="w-fit mx-auto lg:mx-0  items-center justify-center flex px-6 lg:px-12 text-base py-3  my-6 lg:my-9 bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in"
      >
        <span>
          <BsGithub className="text-xl" />
        </span>
        <span className="ml-2 font-semibold">Github</span>
      </a>

      <a
        href={projectUrl}
        className="w-fit mx-auto lg:mx-0  items-center justify-center flex px-6 lg:px-12 text-base py-3  my-6 lg:my-9 bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in"
      >
        <span>
          <BiLinkExternal className="text-xl" />
        </span>
        <span className="ml-2 font-semibold">Live🕵️‍♂️</span>
      </a>
    </p>
  );
}

export default ProjectsLink;
