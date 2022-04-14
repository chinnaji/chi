import React from "react";

function BlogLayout({ children }) {
  // const { session } = useSession();
  // console.log(session);
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default BlogLayout;
