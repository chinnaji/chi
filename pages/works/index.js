import Head from "next/head";
import ProjectsPage from "../../components/ProjectsPage";

function index() {
  return (
    <main className=" bg-zinc-50 dark:bg-dark-600 relative text-zinc-50 m-0 px-5">
      <Head>
        <meta charSet="utf-8" />

        <title>Nnaji Chibuike - Projects</title>

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
          content="Here are some of my amazing seo high ranking and A11Y fit projects "
        />
        <link rel="canonical" href="https://chinnaji.vercel.app/projects" />
        <link rel="publisher" href="https://www.linkedin.com/in/chinnaji/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nnaji Chibuike • Here are some of my amazing seo high ranking and A11Y fit projects "
        />
        <meta
          property="og:description"
          content="Here are some of my amazing seo high ranking and A11Y fit projects "
        />
        <meta property="og:url" content="https://chinnaji.vercel.app/" />
        <meta property="og:site_name" content="Nnaji Chibuike" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Here are some of my amazing seo high ranking and A11Y fit projects "
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
      <ProjectsPage />
    </main>
  );
}

export default index;
