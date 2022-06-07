import React from "react";
import Image from "next/image";
import Link from "next/link";
import shodex from "../../images/shodex_garden.png";
import androidpill_metrics1 from "../../images/androidpill_metrics1.png";
import androidpill_metrics2 from "../../images/androidpill_metrics2.png";
import shodex_seo_after from "../../images/shodex_seo_screenshot.png";
import shodex_seo_before from "../../images/shodex_seo_screenshot1.png";
import portfolio from "../../images/portfolio.png";
import moviemon from "../../images/moviemon.png";
import pikchaw from "../../images/pikchaw.png";
import androidpill from "../../images/androidpill.png";
import pikchaw_screenshot1 from "../../images/pikchaw_screenshor (1).png";
import pikchaw_screenshot2 from "../../images/pikchaw_screenshor (2).png";
import ProjectsLink from "../../components/ProjectsLink";

function index() {
  
  return (
    <main className=" bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 m-0 px-3">
      <div className="w-full text-center pt-3 mb-2 mt-7">
        <h2 className="text-4xl">Recent Projects</h2>
      </div>

      {/* shodex garden */}
      <div className="max-w-6xl mx-auto" id="shodex_garden">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full md:w-1/2 mx-auto">
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
              <div className=" rounded filter-none w-9/12 h-full p-2 border-2 border-lime-600 absolute right-0 inset-y-0 border-b-0  border-l-0 ">
                {" "}
              </div>{" "}
            </div>
          </div>
          <div className="w-full  p-2">
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">
              1. Shodex Garden
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
            {/* <h4 className="font-semibold underline mt-3">How i helped?</h4>

            <p>
              - I helped implement a ticket system where customers get their
              ticket delivered to them by e-mail in a QR code format.
            </p>
            <p className="my-1">
              - I also implemented an admin page for authenticating and
              validating customers tickets
            </p> */}
            <ul className="list-disc lg:ml-10 my-5">
              <li>Built using Next Js, Tailwind Css, Node Js, MongoDB.</li>
              <li>Increased SEO performance by over 54% .</li>
              <li>
                Integrated{" "}
                <a href=" https://paystack.com" className="text-lime-500">
                  Paystack
                </a>{" "}
                payment solution for making secure payments online.
              </li>
              <li>Generate QR code tickets for each purchase.</li>
              <li>
                Utilized Nodemailer for emailing tickets and order summary to
                customers.
              </li>
              <li>
                Built an admin dashboard for managing and validating tickets.
              </li>
              <li>Implemented Admin Authentication (login & signup).</li>
            </ul>
            <p className="text-3xl text-center font-medium mt-b mb-5 mt-10 text-zinc-100">
              Major Improvements in SEO Perfomance
            </p>
            <div className="flex flex-wrap my-10" id="shodex_screenshots">
              <div className="  w-full md:w-1/2  h-[400px] relative p-2 pb-0">
                <h4 className="text-center text-xl my-3 font-semibold">
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
              <div className="  w-full md:w-1/2  h-[300px] lg:h-[400px]  relative p-2 pb-0">
                <h4 className="text-center text-xl lg:mt-3 mb-3 font-semibold w-full">
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

      {/* Androidpill */}
      <div className="max-w-6xl mx-auto" id="androidpill">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full md:w-1/2 mx-auto">
            <div className="  w-full  h-full relative p-2 pb-0">
              <Image
                src={androidpill}
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
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">
              2. Androidpill
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
              <li>
                {/* Built using Next Js, Wordpress, Graphql, Tailwind css */}
                Optimized SEO for pages using Next Js Static Site Generation
                (SSG) Technology.
              </li>
              <li>Used the wpGraphql plugin in making declarative queries.</li>
              <li>
                Utilized Google analytics and Google console for measuring
                traffic and tracking performance issues.
              </li>
              <li>Integrated Progressive Web App technology.</li>
            </ul>

            <p className="text-3xl text-center font-medium mt-b mb-5 mt-10 text-zinc-100">
              Google Analytics Report
            </p>
            <div className="flex flex-wrap mt-10">
              <div className="  w-full md:w-1/2  h-[300px] relative p-2 pb-0">
<<<<<<< Updated upstream
              <Link href="/androidpill_metrics1.png" passHref>
  <Image
                  src={androidpill_metrics1}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />

</Link>
=======
                <Link passHref href="/androidpill_metrics1.png">
                  <Image
                    src={androidpill_metrics1}
                    //   layout="fill"
                    loading="eager"
                    alt="projects screen shots"
                    className="rounded "
                    placeholder="blur"
                  />
                </Link>
>>>>>>> Stashed changes
              </div>
              <div className="  w-full md:w-1/2 lg:-mt-0 -mt-28  h-[300px] relative p-2 pb-0">
     <Link href="/androidpill_metrics2.png" passHref>        
   <Image
                  src={androidpill_metrics2}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
</Link>
              </div>
            </div>

            <ProjectsLink
              githubUrl="https://github.com/chinnaji/androidpill-wordpress"
              projectUrl="https://www.androidpill.com"
            />
          </div>
        </div>
      </div>

      {/* pikchaw */}
      <div className="max-w-6xl mx-auto" id="pikchaw">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full md:w-1/2 mx-auto">
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
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">3. Pikchaw</h2>
            <p>
              Ususally when designing, you tend to use images and finding the
              right images can be a pain in the a** 😫, Introducing{" "}
              <a href="http://Pikchaw.vercel.app" className="text-lime-500">
                {" "}
                Pikchaw
              </a>
              , A website where you can find images from your favorite sources,
              all in one place 🤯🤭{" "}
            </p>
            <h4 className="text-center text-2xl mt-12 mb-3 font-semibold">
              SCREENSHOTS
            </h4>
            <div className="flex flex-wrap mt-10">
              <div className="  w-full md:w-1/2  h-[300px] relative p-2 pb-0">
                <Image
                  src={pikchaw_screenshot2}
                  //   layout="fill"
                  loading="eager"
                  alt="projects screen shots"
                  className="rounded "
                  placeholder="blur"
                />
              </div>
              <div className="  w-full md:w-1/2 lg:-mt-0 -mt-12  h-[300px] relative p-2 pb-0">
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
            <div className="lg:-mt-5 -mt-16">
              <ProjectsLink
                githubUrl="https://github.com/chinnaji/pikchaw"
                projectUrl="https://pikchaw.vercel.app"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* MovieMon */}
      {/* <div className="max-w-6xl mx-auto" id="moviemon">
        <div className={`w-full border-b dark:border-b-zinc-500 py-10 my-10`}>
          <div className="w-full md:w-1/2 mx-auto">
            <div className="  w-full  h-full relative p-2 pb-0">
              <Image
                src={moviemon}
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
            <h2 className="text-3xl mb-4 mt-10 text-zinc-100">3. Moviemon</h2>
            <p>
              <a href="http://moviemon.vercel.app" className="text-lime-500">
                {" "}
                Moviemon
              </a>{" "}
              is a movie listing projects that gives users the latest movies, tv
              series and movies casts and details on them individually. I built
              this using <b>Typescript</b>, <b>Next Js</b>, <b>TMDB Api</b> and{" "}
              <b>Tailwind css.</b>
            </p>
            <p className="underline my-3 text-lime-500">
              <a href="">View Source Code Here.</a>
            </p>
          </div>
        </div>
      </div> */}
      {/*  */}
      {/*  */}
    </main>
  );
}

export default index;
