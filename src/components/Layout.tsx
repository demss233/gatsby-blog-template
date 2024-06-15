import * as React from "react";

type pageComponent = {
  children: React.ReactNode;
};

const Layout: React.FC<pageComponent> = ({ children }) => {
  return (
    <>
      <div className="w-[900px] mx-auto mt-14 flex flex-col gap-10">
        {children}
      </div>
    </>
  );
};

export default Layout;
