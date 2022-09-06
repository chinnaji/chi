import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import shodex from "../images/shodex_garden.png";
import androidpill_metrics1 from "../images/androidpill_metrics1.png";
import androidpill_metrics2 from "../images/androidpill_metrics2.png";
import androidpill_seo from "../images/androidpill_seo.png";
import shodex_seo_after from "../images/shodex_seo_screenshot.png";
import shodex_seo_before from "../images/shodex_seo_screenshot1.png";
import portfolio from "../images/portfolio.png";
import moviemon from "../images/moviemon.png";
import pikchaw from "../images/pikchaw.png";
import androidpill from "../images/androidpill.png";
import pikchaw_screenshot1 from "../images/pikchaw_screenshor (1).png";
import pikchaw_screenshot2 from "../images/pikchaw_screenshor (2).png";
import grupr from "../images/grupr.png";
import mano from "../images/mano.png";
import gruprScreenshot from "../images/grupr-screenshot.png";
import gruprScreenshot2 from "../images/grupr-screenshot2.png";
import manoScreenshot from "../images/mano-screenshot.png";
import manoScreenshot2 from "../images/mano-screenshot2.png";
import ProjectsLink from "../components/ProjectsLink";

function ProjectsPage() {
  const title = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (title.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(title.current, {
          duration: 700,
          move: 0,
        });
        sr().reveal(
          ".project-img",
          {
            duration: 500,
            // delay: 1000,
            scale: 1.5,
            distance: "20px",
            origin: "bottom",
            // reset: true,
            easing: "ease-in-out",
            viewFactor: 1,
          },
          75
        );
        sr().reveal(".lists", {
          easing: "ease-in-out",
          delay: 200,
          interval: 50,
          origin: "bottom",
          distance: "30px",
        });
      }
    }
    animate();
  }, []);
  return (
    <>
      {" "}
      <div className="w-full text-center pt-3 mb-2 mt-7">
        <h2 ref={title} className="lg:text-5xl text-4xl mt-10">
          Recent Projects
        </h2>
      </div>
      {/* Androidpill */}
      <div className="max-w-6xl mx-auto my-12" id="androidpill">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="project-img  w-full  lg:h-full relative p-2 pb-0">
              <Image
                src={androidpill}
                priority={true}
                loading="eager"
                alt="projects screen shots"
                className="rounded "
                placeholder="blur"
              />
              <div className=" rounded filter-none w-9/12 lg:h-full p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
                {" "}
              </div>{" "}
            </div>
          </div>
          <div className="w-full  p-2">
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">
              1. Androidpill
            </h2>
            <p>
              <a href="http://androidpill.com" className="text-lime-500">
                {" "}
                Androidpill
              </a>{" "}
              is my personal gaming blog. I had to move to headless CMS for
              better customizability and i have no regrets. i built it using
              Next Js, Tailwind and Graph Ql.
            </p>

            <ul className="list-disc lg:ml-10 my-5">
              <li className="lists">
                {/* Built using Next Js, Wordpress, Graphql, Tailwind css */}
                Optimized SEO for pages using Next Js Static Site Generation
                (SSG) Technology.
              </li>
              {/* <li className="lists">Used the wpGraphql plugin in making declarative queries.</li> */}
              <li className="lists">
                Utilized Google analytics and Google console for measuring
                traffic and tracking performance issues.
              </li>
              <li className="lists">
                Integrated Progressive Web App technology.
              </li>
            </ul>

            <h2 className="text-3xl text-center font-medium mt-b mb-5 mt-10 text-zinc-100">
              <i> Google Analytics Report</i>
            </h2>

            <div
              className="flex items-center flex-wrap my-10"
              id="androidpill_metrics"
            >
              <div className="  w-full lg:w-1/2  lg:h-[250px] relative p-2 pb-0">
                <Link href="/androidpill_metrics1.png" passHref>
                  <Image
                    src={androidpill_metrics1}
                    //   layout="fill"
                    loading="eager"
                    alt="projects screen shots"
                    className="rounded cursor-pointer"
                    placeholder="blur "
                  />
                </Link>
              </div>

              <div className="  w-full lg:w-1/2   lg:mt-0  md:-mt-0 mt-7 lg:h-[250px]  relative p-2 pb-0">
                <Link href="/androidpill_metrics2.png" passHref>
                  <Image
                    src={androidpill_metrics2}
                    //   layout="fill"
                    loading="eager"
                    alt="projects screen shots"
                    className="rounded cursor-pointer"
                    placeholder="blur"
                  />
                </Link>
              </div>

              <h2 className="text-3xl w-full text-center font-medium mt-24 mb-5 text-zinc-100">
                <i> SEO Metrics Audit</i>
              </h2>
              <div className="  w-full  mx-auto mt-2  overflow-hidden  relative p-2 pb-0">
                <Link href="/androidpill_seo.png" passHref>
                  <Image
                    src={androidpill_seo}
                    //   layout="fill"
                    loading="eager"
                    alt="projects screen shots"
                    className="rounded cursor-pointer"
                    placeholder="blur"
                  />
                </Link>
              </div>
            </div>

            <div className="">
              <ProjectsLink
                githubUrl="https://github.com/chinnaji/Androidpill"
                projectUrl="https://www.androidpill.com"
              />
            </div>
          </div>
        </div>
      </div>
      {/* grupr */}
      <div className="max-w-6xl mx-auto my-12" id="grupr">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="  w-full  lg:h-full relative p-2 pb-0">
              <Image
                src={grupr}
                priority={true}
                loading="eager"
                alt="projects screen shots"
                className="rounded "
                placeholder="blur"
              />
              <div className=" rounded filter-none w-9/12 lg:h-full p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
                {" "}
              </div>{" "}
            </div>
          </div>
          <div className="w-full  p-2">
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">2. Grupr.nl</h2>
            <p>
              <a href="http://grupr.nl" className="text-lime-500">
                {" "}
                Grupr
              </a>{" "}
              A url management software that helps share multiple url&apos;s as
              one short link.built it using Next Js, Tailwind and Graph Ql.
            </p>

            <ul className="list-disc lg:ml-10 my-5">
              <li className="lists">
                Integrated Firebase storage and authentication
              </li>
              {/* <li className="lists">Used the wpGraphql plugin in making declarative queries.</li> */}
              <li className="lists">
                Integrated Google Analytics for measuring Traction
              </li>
              <li className="lists">
                Integrated Progressive Web App technology.
              </li>
            </ul>

            <h4 className="text-center text-2xl mt-16 mb-3 font-semibold">
              SCREENSHOTS
            </h4>
            <div className="flex items-center flex-wrap mt-10">
              <div className="  w-full lg:w-1/2  lg:h-[300px] relative p-2 pb-0">
                <Image
                  src={gruprScreenshot}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
              <div className="  w-full lg:w-1/2  lg:mt-0 mt-3 lg:h-[300px] relative p-2 pb-0">
                <Image
                  src={gruprScreenshot2}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="">
              <ProjectsLink
                githubUrl="https://github.com/chinnaji/grupr"
                projectUrl="http://grupr.nl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* shodex garden */}
      <div className="max-w-6xl mx-auto my-12" id="shodex_garden">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="  w-full  h-full relative p-2 pb-0">
              <Image
                src={shodex}
                //   layout="fill"
                priority={true}
                loading="eager"
                alt="projects screen shots"
                className="rounded "
                placeholder="blur"
              />
              {/* <div className=" rounded filter-none w-9/12  p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
            {" "}
          </div>{" "} */}
            </div>
          </div>
          <div className="w-full  p-2">
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">
              3. Shodex Garden
            </h2>
            <p>
              <a
                href="http://shodexgarden.vercel.app"
                className="text-lime-500"
              >
                {" "}
                Shodex Garden
              </a>{" "}
              is a place for relaxation, sight seeing and fun activities. They
              needed a better way of handling ticket sales, validation and a
              user friendly interface in that .
            </p>

            <ul className="list-disc lg:ml-10 my-5">
              <li className="lists">
                Built using Next Js, Tailwind Css, Node Js, MongoDB.
              </li>
              <li className="lists">Increased SEO performance by over 54% .</li>
              <li className="lists">
                Integrated{" "}
                <a href=" https://paystack.com" className="text-lime-500">
                  Paystack
                </a>{" "}
                payment solution for making secure payments online.
              </li>
              <li className="lists">
                Generate QR code tickets for each purchase.
              </li>
              <li className="lists">
                Utilized Nodemailer for emailing tickets and order summary to
                customers.
              </li>
              <li className="lists">
                Built an admin dashboard for managing and validating tickets.
              </li>
              <li className="lists">
                Implemented Admin Authentication (login & signup).
              </li>
            </ul>
            <p className="text-3xl text-center font-medium mt-b mb-5 mt-10 text-zinc-100">
              <i>Major Improvements in SEO Perfomance</i>
            </p>
            <div
              className="flex items-center flex-wrap my-10"
              id="shodex_screenshots"
            >
              <div className="  w-full lg:w-1/2  lg:h-[400px] relative p-2 pb-0">
                <h4 className="text-center text-2xl my-3 font-semibold">
                  <i>BEFORE</i>
                </h4>
                <Link href="/shodex_seo_screenshot1.png" passHref>
                  <Image
                    src={shodex_seo_before}
                    //   layout="fill"
                    loading="eager"
                    alt="projects screen shots"
                    className="rounded cursor-pointer"
                    placeholder="blur "
                  />
                </Link>
              </div>
              <div className="  w-full lg:w-1/2   lg:mt-0  md:-mt-0 mt-5 lg:h-[400px]  relative p-2 pb-0">
                <h4 className="text-center text-2xl lg:mt-3 mb-3 font-semibold w-full">
                  <i> AFTER</i>
                </h4>
                <Link href="/shodex_seo_screenshot.png" passHref>
                  <Image
                    src={shodex_seo_after}
                    //   layout="fill"
                    loading="eager"
                    alt="projects screen shots"
                    className="rounded cursor-pointer"
                    placeholder="blur"
                  />
                </Link>
              </div>

              <ProjectsLink
                githubUrl="https://github.com/chinnaji/shodexgarden"
                projectUrl="https://shodexgarden.vercel.app"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* pikchaw */}
      <div className="max-w-6xl mx-auto my-12" id="pikchaw">
        {/* <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}> */}
        <div className={`border-b dark:border-b-zinc-500 w-full py-10 my-10`}>
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="  w-full  h-full relative p-2 pb-0">
              <Image
                src={pikchaw}
                //   layout="fill"
                priority={true}
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
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">4. Pikchaw</h2>
            <p>
              Ususally when designing, I tend to use images and finding the
              right images can be a pain in the a** 😫, Introducing{" "}
              <a href="http://Pikchaw.vercel.app" className="text-lime-500">
                {" "}
                Pikchaw
              </a>
              , A website where you can find images from your favorite sources,
              all in one place 🤯🤭{" "}
            </p>
            <h4 className="text-center text-2xl mt-16 mb-3 font-semibold">
              SCREENSHOTS
            </h4>
            <div className="flex items-center flex-wrap mt-10">
              <div className="  w-full lg:w-1/2  lg:h-[300px] relative p-2 pb-0">
                <Image
                  src={pikchaw_screenshot2}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
              <div className="  w-full lg:w-1/2  lg:mt-0 mt-3 lg:h-[300px] relative p-2 pb-0">
                <Image
                  src={pikchaw_screenshot1}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="">
              <ProjectsLink
                githubUrl="https://github.com/chinnaji/pikchaw"
                projectUrl="https://pikchaw.vercel.app"
              />
            </div>
          </div>
        </div>
      </div>
      {/* grupr */}
      <div className="max-w-6xl mx-auto my-12" id="mano">
        <div className={`w-full  py-10 my-10`}>
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="  w-full  lg:h-full relative p-2 pb-0">
              <Image
                src={mano}
                priority={true}
                loading="eager"
                alt="projects screen shots"
                className="rounded "
                placeholder="blur"
              />
              <div className=" rounded filter-none w-9/12 lg:h-full p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
                {" "}
              </div>{" "}
            </div>
          </div>
          <div className="w-full  p-2">
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">5. Mano</h2>
            <p>
              <a href="https://shop.manoapp.com/" className="text-lime-500">
                {" "}
                Mano
              </a>{" "}
              A company redefining the conventional grocery shopping experience
              by offering you an ultra fast, convenient and reliable grocery
              delivery service.
            </p>

            {/* <ul className="list-disc lg:ml-10 my-5">
              <li className="lists">
                Integrated Firebase storage and authentication
              </li>
              <li className="lists">
                Integrated Google Analytics for measuring Traction
              </li>
              <li className="lists">
                Integrated Progressive Web App technology.
              </li>
            </ul> */}

            <h4 className="text-center text-2xl mt-16 mb-3 font-semibold">
              SCREENSHOTS
            </h4>
            <div className="flex items-center flex-wrap mt-10">
              <div className="  w-full lg:w-1/2  lg:h-[300px] relative p-2 pb-0">
                <Image
                  src={manoScreenshot}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
              <div className="  w-full lg:w-1/2  lg:mt-0 mt-3 lg:h-[300px] relative p-2 pb-0">
                <Image
                  src={manoScreenshot2}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
            </div>
            {/* <div className="">
              <ProjectsLink
                githubUrl="https://github.com/chinnaji/grupr"
                projectUrl="http://grupr.nl"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
