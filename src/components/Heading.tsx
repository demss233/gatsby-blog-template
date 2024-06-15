import * as React from "react";

type SpanProp = {
  children: React.ReactNode;
};

const Heading: React.FC<SpanProp> = ({ children }) => {
  return (
    <>
      <h1 className="text-white font-bold text-3xl">{children}</h1>
    </>
  );
};

export default Heading;
