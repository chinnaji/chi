import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="text-zinc-500">
      <Navbar />
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default MainLayout;
