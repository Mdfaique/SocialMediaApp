import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  Head  from "next/head";

const Layout = ({ children,title }) => {
  return (
    <>
      <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Header />
      <main className="container" style={{minHeight:"82.50vh"}}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title : "Social Media App"
};

export default Layout;
