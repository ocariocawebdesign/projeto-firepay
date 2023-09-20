import React from "react";
import User from "./img/usuario3.png";

const HeroContent = () => {
  return (
    <>
      <section id="mainHero" className="mt-5">
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="text-wrapper align-left">
                  <h1 id="title-hero"
                    className="mbr-section-title mb-4 mt-4 display-2 text-uppercase animate__animated animate__fadeIn"
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: "700",
                      color: "#FFF",
                      lineHeight: "38px",
                    }}
                  >
                    Criamos um checkout
                    <br /> para colocar mais dinheiro no seu bolso - 16% a mais,
                    em média.
                  </h1>
                  <h2
                    className="mbr-text mbr-fonts-style mb-4 display-7 animate__animated animate__fadeIn animate__delay-1s"
                    style={{
                      fontSize: "1em",
                      fontWeight: "700",
                      color: "#FAFAFA",
                      lineHeight: "28px",
                    }}
                  >
                    Com a gente você aumenta sua margem e escala mais rápido o
                    seu negócio.
                  </h2>
                  <div className="mbr-section-btn mt-5">
                    <button
                      style={{ marginRight: "10px" }}
                      className="btn-call-action"
                      href="#"
                    >
                      Comece agora
                    </button>
                    <button className="btn-call-action" href="#">
                      Agende com um consultor
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className=" image-wrapper animate__animated animate__fadeIn animate__delay-0.5s">
                  <img
                    width=""
                    className="img-fluid"
                    src={User}
                    alt="Usuário"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroContent;
