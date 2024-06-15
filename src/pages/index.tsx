import * as React from "react";
import Header from "../components/Header";
import { pageTitle } from "../consts";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Blog from "../components/Blog";
import Layout from "../components/Layout";

const Index: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <Hero></Hero>
        <Blog></Blog>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export const Head = () => <title>{`Home | ${pageTitle}`}</title>;

export default Index;
