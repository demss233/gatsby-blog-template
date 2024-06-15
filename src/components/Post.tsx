import * as React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

type BlogPost = {
  blogTitle: string;
  datePublished: string;
  smallExplanation: string;
  slug: string;
};

const Post: React.FC<BlogPost> = ({
  blogTitle,
  datePublished,
  smallExplanation,
  slug,
}) => {
  return (
    <>
      <div
        className="flex w-full justify-between items-center p-4 rounded-lg outline gap-20 outline-slate-200 outline-2 hover:scale-105 transition-all ease-in-out cursor-pointer 
      "
        onClick={() => {
          window.location.href = `/${slug}`;
        }}
      >
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-white font-bold text-2xl">{blogTitle}</span>
          <Paragraph>
            <span>{smallExplanation}</span>
          </Paragraph>
        </div>
        <div>
          <Paragraph>
            <span>{datePublished}</span>
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default Post;
