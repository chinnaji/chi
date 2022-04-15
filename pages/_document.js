import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html lang="en" className="light ">
      <Head />
      <body className="bg-zinc-50 dark:bg-dark-600 relative text-zinc-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
