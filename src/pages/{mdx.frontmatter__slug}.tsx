import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import BlogLayout from "../components/BlogLayout";
import "../../prose.css";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";

type explicitAnyType = {
  data: any;
  children: any;
};

const BlogPost = ({ data, children }: explicitAnyType) => {
  return (
    <>
      <Header />

      <BlogLayout>
        <div className="flex flex-col gap-4">
          <Heading>
            <span className="border-b-white border-b-2">
              {data.mdx.frontmatter.Title}
            </span>
          </Heading>
          <Paragraph>
            <span>{data.mdx.frontmatter.date}</span>
          </Paragraph>
        </div>
        <div className="prose prose-invert w-full">{children}</div>
        <Footer />
      </BlogLayout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        Title
        date
      }
      excerpt
    }
  }
`;

export default BlogPost;
