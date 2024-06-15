import * as React from "react";
import Heading from "../components/Heading";
import { useStaticQuery, graphql } from "gatsby";
import Post from "../components/Post";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const data: any = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          frontmatter {
            Title
            date
            slug
          }
          excerpt
          id
        }
      }
    }
  `);

  const dataArray: any[] = data.allMdx.nodes;

  return (
    <>
      <Header></Header>
      <Layout>
        <Heading>
          <span>Recent Posts.</span>
        </Heading>
        <div className="w-[900px] mt-3 mx-auto flex flex-col gap-6">
          {dataArray.map((individualData: any, index: number) => {
            return (
              <>
                <Post
                  blogTitle={individualData.frontmatter.Title}
                  smallExplanation={individualData.excerpt}
                  datePublished={individualData.frontmatter.date}
                  slug={individualData.frontmatter.slug}
                ></Post>
              </>
            );
          })}
        </div>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Blog;
