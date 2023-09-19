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
                  <h1
                    className="mbr-section-title mb-4 mt-4 display-2 text-uppercase animate-fade-up animate-once animate-duration-[2800ms]"
                    style={{
                      fontSize: "1.8rem",
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
                    className="mbr-text mbr-fonts-style mb-4 display-7 animate-fade-down animate-once animate-duration-[2000ms]"
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
                <div className=" image-wrapper animate-fade-up animate-once animate-duration-[2800ms]">
                  <img width="" className="img-fluid" src={User} alt="Usuário" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section
        id="mainHero"
        data-bs-version="5.1"
        className="article4 cid-tQdQgvEKPc"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-5 image-wrapper">
              <img className="w-100" src={User} alt="Usuário" />
            </div>
            <div className="col-12 col-md-12 col-lg">
              <div className="text-wrapper align-left">
                <h1
                  className="mbr-section-title mb-4 display-2 text-uppercase"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#FAFAFA",
                    lineHeight: "38px",
                  }}
                >
                  Criamos um checkout para colocar mais dinheiro no seu bolso -
                  16% a mais, em média.
                </h1>
                <h2
                  className="mbr-text mbr-fonts-style mb-4 display-7"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#FAFAFA",
                    lineHeight: "28px",
                  }}
                >
                  Com a gente você aumenta sua margem e escala mais rápido
                  <br /> o seu negócio.
                </h2>
                <div className="mbr-section-btn mt-3">
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
          </div>
        </div>
      </section>
                <div className="wave"></div>*/}
    </>
  );
};

export default HeroContent;
