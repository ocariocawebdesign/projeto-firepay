import React from "react";
import Team from "./img/team.jpg";
import Team2 from "./img/team2.jpg";
//import App from "./img/app.png";

const Content = () => {
  return (
    <>
      <section id="content">
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2
                  className="text-uppercase animate-fade-up animate-once animate-duration-[2800ms]"
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "700",
                    color: "#333",
                    lineHeight: "38px",
                    marginTop: "1rem",
                  }}
                >
                  Checkouts de alta conversão
                </h2>

                <p className="mt-2 animate-fade-up animate-once animate-duration-[2800ms]">
                  Aumente suas vendas instantaneamente com nossos checkouts
                  testados para reduzir o atrito e maximizar a sua conversão,
                  você pode ainda personalizalos de acordo com sua marca.
                  <br />
                  Aqui você tem uma equipe de engenheiros e designers
                  trabalhando incansavelmente para aumentar os seus números.
                </p>
                <img
                  alt="Carrinho Checkout"
                  className="animate-fade-up animate-once animate-duration-[2800ms]"
                  width="48"
                  height="48"
                  src="data:image/png;base64,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"
                ></img>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    className="img-fluid rounded-circle"
                    src={Team}
                    alt="Time de designers"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="content2" className="">
        <div className="container-fluid background-section-2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2
                  className="text-uppercase animate-fade-up animate-once animate-duration-[2800ms]"
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "700",
                    color: "#333",
                    lineHeight: "38px",
                    marginTop: "1rem",
                  }}
                >
                  Sua equipe comercial empoderada
                </h2>

                <p className="mt-2 animate-fade-up animate-once animate-duration-[2800ms]">
                  Imagina cada vendedor acompanhando em tempo real as prṕprias
                  vendas e agindo instantaneamente nos abonos, vendas não
                  aprovadas ou até orientando os clientes nas vendas iniciadas.
                  <br />
                  Aqui a sua equipe comercial tem um acesso exclusivo, com
                  rankings, metas, divisão por times, insights em tempo real.
                  Tudo para otimizar e impulsionar seu processo de vendas.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    style={{}}
                    className="img-fluid rounded img-hero"
                    src={Team2}
                    alt="Time de vendas"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
