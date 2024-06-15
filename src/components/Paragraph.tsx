import * as React from "react";

type SpanProp = {
  children: React.ReactNode;
};

const Paragraph: React.FC<SpanProp> = ({ children }) => {
  return (
    <>
      <h1 className="text-slate-200">{children}</h1>
    </>
  );
};

export default Paragraph;
