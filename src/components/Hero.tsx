import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <>
      <div className="welcome flex flex-col gap-3">
        <Heading>
          <span>Welcome Sailor! ⛵</span>
        </Heading>
        <Paragraph>
          <span>
            Hello sailor, this is a sample blog template made with tailwindCSS
            and graphQL. Source code is neatly written and feel free to
            customize this template. Go to{" "}
            <kbd className="bg-gray-800">Hero.tsx</kbd> to change this section.
            You can go to <kbd className="bg-gray-800">consts.ts</kbd> to change
            the constants used throughout this site.
          </span>
        </Paragraph>
        <div className="mt-3">
          <code className="text-white bg-gray-800">
            git clone 'github.com/session'
            <br /> cd blog <br /> npm run develop
          </code>
        </div>
      </div>
      <div className="processedHeroImage">
        <div className="heroResizableImage"></div>
        <StaticImage
          class="rounded-lg"
          alt="Hero Image"
          src="https://images.unsplash.com/photo-1718081591976-64a345c4f92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></StaticImage>
      </div>
    </>
  );
};

export default Hero;
