import * as React from "react";
import Heading from "./Heading";
import { useStaticQuery, graphql } from "gatsby";
import Post from "./Post";

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
      <Heading>
        <span>Recent Posts.</span>
      </Heading>
      <div className="w-[900px] mt-3 mx-auto flex flex-col gap-6">
        {dataArray.map((individualData: any, index: number) => {
          if (index >= 3) {
            return "";
          }
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
        {dataArray.length >= 3 && (
          <button
            className="text-black bg-slate-200 px-4 py-2 rounded-lg"
            onClick={() => {
              window.location.href = "/blog";
            }}
          >
            View more
          </button>
        )}
      </div>
    </>
  );
};

export default Blog;
