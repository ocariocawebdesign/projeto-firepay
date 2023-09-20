import React from "react";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import Logo from "./img/logo_escuro.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          padding: "2rem",
          backgroundColor: "#1D3D91",
          color: "#FAFAFA",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img src={Logo} width="180" alt="Logo Firepay" />
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <p className="text-center" style={{ marginTop: "15px" }}>
                Copyright © 2023 - Desenvolvido por Carlos Abreu
              </p>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div
                className=""
                style={{ display: "flex", justifyContent: "end" }}
              >
                <ScrollToTopButton />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
