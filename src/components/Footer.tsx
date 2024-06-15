import * as React from "react";
import Paragraph from "./Paragraph";
import { footerleft, authorName } from "../consts";

const Footer: React.FC = () => {
  return (
    <>
      <div className="py-10 mt-20 flex justify-between items-center">
        <Paragraph>
          <span className="font-bold underline underline-offset-4">
            {footerleft}
          </span>
        </Paragraph>
        <Paragraph>
          <span>{authorName}</span>
        </Paragraph>
      </div>
    </>
  );
};

export default Footer;
