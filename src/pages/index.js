import * as React from "react";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header/Header";
import HeroContent from "../Components/HeroContent/HeroContent";
import Content from "../Components/Content/Content";

const IndexPage = () => {
  return (
    <>
      <Header />
      <HeroContent />
      <Content />
      <main>
        <h1 className="text-center">Página Index</h1>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
