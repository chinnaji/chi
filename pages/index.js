import Head from "next/head";
import MainHomePage from "../components/Home/MainHomePage";
// import styles from "../styles/Home.module.css";
// import { NextSeo } from "next-seo";
// import screenshot from "../images/portfolio.png";

export default function Home() {
  return (
    <>
      {/* <NextSeo
        title="Chinnaji Portfolio"
        description="This is My portfolio shocasing my projects"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Chi_Dev Portfolio",
          description: "Open Graph Description",
          images: [
            {
              url: screenshot,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            ,
            { url: screenshot },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@ChibuikeNnaji10",
          site: "@ChibuikeNnaji10",
          cardType: "summary_large_image",
        }}
      /> */}
      <Head>
        <meta charSet="utf-8" />

        <title>Nnaji Chibuike -Software Developer</title>

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          href="https://chinnaji.vercel.app/favicon.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://chinnaji.vercel.app/favicon.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://chinnaji.vercel.app/favicon.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://chinnaji.vercel.app/favicon.jpg"
        />

        <link
          rel="shortcut icon"
          href="https://chinnaji.vercel.app/favicon.ico"
        />

        <meta
          name="description"
          content="Software Engineer - Building A11Y and High SEO fit Websites and Mobile Apps "
        />
        <link rel="canonical" href="https://chinnaji.vercel.app/" />
        <link rel="publisher" href="https://www.linkedin.com/in/chinnaji/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nnaji Chibuike • Software Engineer - Building A11Y and High SEO fit Websites and Mobile Apps "
        />
        <meta
          property="og:description"
          content="Software Engineer - Building A11Y and High SEO fit Websites and Mobile Apps "
        />
        <meta property="og:url" content="https://chinnaji.vercel.app/" />
        <meta property="og:site_name" content="Nnaji Chibuike" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Software Engineer - Building A11Y and High SEO fit Websites and Mobile Apps "
        />
        <meta
          name="twitter:title"
          content="Nnaji Chibuike • Galway based Freelance Web Designer &amp; Developer"
        />
        <meta name="twitter:site" content="@ChibuikeNnaji10" />
        <meta
          name="twitter:image"
          content="https://chinnaji.vercel.app/favicon.jpg"
        />
        <meta name="twitter:creator" content="@ChibuikeNnaji10" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHomePage />
    </>
  );
}
