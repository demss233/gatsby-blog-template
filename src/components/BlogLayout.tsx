import * as React from "react";

type pageComponent = {
  children: React.ReactNode;
};

const BlogLayout: React.FC<pageComponent> = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto mt-14 flex flex-col gap-10 px-4 md:px-8 lg:px-16">
      {children}
    </div>
  );
};

export default BlogLayout;
