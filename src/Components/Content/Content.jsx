import React from "react";
import Team from "./img/team.jpg";
import Team2 from "./img/team2.jpg";
import Upsell from "./img/upsell.jpg";
import Nuvemshop from "./img/nuvemshop.png";
import Bling from "./img/bling.png";
import Hubsell from "./img/hubsell.png";
import Plugg from "./img/plugg.to_.png";
import Woocommerce from "./img/woocommerce.png";
import Shopify from "./img/shopify.png";
import Solares from "./img/solares.png";
import Magento from "./img/magento.png";
import Tray from "./img/tray.png";
import Nfservice from "./img/nfservice.png";

//import Flechas from "./img/flechas.png";
import Integracao from "./img/integracao.jpg";

const Content = () => {
  return (
    <>
      <section id="content">
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2
                  className="text-uppercase animate__animated animate__fadeInLeft animate__delay-2s"
                  style={{
                    fontSize: "1.8em",
                    fontWeight: "bolder",
                    color: "#273240",
                    lineHeight: "38px",
                    marginTop: "1rem",
                  }}
                >
                  Checkouts de{" "}
                  <span style={{ color: "#1D3D91" }}>
                    <strong>alta conversão</strong>
                  </span>
                </h2>

                <p className="mt-2 animate__animated animate__fadeInLeft animate__delay-3s">
                  Aumente suas vendas instantaneamente com nossos checkouts
                  testados para reduzir o atrito e maximizar a sua conversão,
                  você pode ainda personalizalos de acordo com sua marca.
                  <br />
                  Aqui você tem uma equipe de engenheiros e designers
                  trabalhando incansavelmente para aumentar os seus números.
                </p>
                <img
                  alt="Carrinho Checkout"
                  className="animate__animated animate__fadeInLeft animate__delay-3s"
                  width="48"
                  height="48"
                  src="data:image/png;base64,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"
                ></img>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate__animated animate__fadeIn animate__delay-1s">
                  <img
                    style={{ borderRadius: "55rem" }}
                    className="img-fluid"
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
                <figure className="animate__animated animate__fadeIn animate__delay-1s">
                  <img
                    className="img-fluid rounded img-hero"
                    src={Team2}
                    alt="Time de vendas"
                  />
                </figure>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2
                  className="text-uppercase animate__animated animate__fadeIn animate__delay-1s"
                  style={{
                    fontSize: "1.8em",
                    fontWeight: "bolder",
                    color: "#273240",
                    lineHeight: "38px",
                    marginTop: "1rem",
                  }}
                >
                  Sua equipe comercial{" "}
                  <span style={{ color: "#1D3D91" }}>
                    <strong>empoderada</strong>
                  </span>
                </h2>

                <p className="mt-2 animate__animated animate__fadeIn animate__delay-1.5s">
                  Imagina cada vendedor acompanhando em tempo real as próprias
                  vendas e agindo instantaneamente nos abonos, vendas não
                  aprovadas ou até orientando os clientes nas vendas iniciadas.
                  <br />
                  Aqui a sua equipe comercial tem um acesso exclusivo, com
                  rankings, metas, divisão por times, insights em tempo real.
                  Tudo para otimizar e impulsionar seu processo de vendas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content3">
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2
                  className="text-uppercase animate__animated animate__fadeIn animate__delay-1.5s"
                  style={{
                    fontSize: "1.8em",
                    fontWeight: "bolder",
                    color: "#273240",
                    lineHeight: "38px",
                    marginTop: "1rem",
                  }}
                >
                  Upsell e downsell{" "}
                  <span style={{ color: "#1D3D91" }}>
                    <strong>nativos</strong>
                  </span>
                </h2>

                <p className="mt-2 animate__animated animate__fadeIn animate__delay-1.5s">
                  Pode esquecer as gambiarras para implementar o
                  <strong> Upsell</strong> e <strong>Downsell</strong>, com
                  nossos funis você aumenta seu ticket médio em 23%, em média,
                  configurando em poucos minutos todo seu funil de conversão.
                  <br />
                  Se você ainda não usa upsell, está deixando muito dinheiro na
                  mesa, mas não se preocupe, nossa equipe ajuda você.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="aanimate__animated animate__fadeIn animate__delay-1.5s">
                  <img
                    className="img-fluid rounded img-hero"
                    src={Upsell}
                    alt="Time de designers"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content4">
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2
                    className="heartBeat-effect"
                    style={{
                      fontSize: "1.8em",
                      fontWeight: "bolder",
                      color: "#FFF",
                      lineHeight: "38px",
                      marginTop: "1rem",
                      padding: "3rem",
                      borderRadius: "1%",
                      cursor: "pointer",
                      background: "#1D3D91",
                    }}
                  >
                    One-Click-Buy
                    {/*<img
                      className="img-fluid"
                      width="48"
                      src={Flechas}
                      alt="One Click Buy"
                  />*/}
                  </h2>
                  <br />
                </div>

                <p className="mt-2 animate-fade-up animate-once animate-duration-[2800ms]">
                  Assim que o cliente realiza uma compra, os dados de compra são
                  salvos para as próximas transações. Assim, ele consegue
                  realizar uma nova compra com apenas um clique, aumentando
                  incrivelmente sua conversão.
                </p>
              </div>
              {/*<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    className="img-fluid rounded img-hero"
                    src={Upsell}
                    alt="Time de designers"
                  />
                </figure>
                </div>*/}
            </div>
          </div>
        </div>
      </section>
      <section id="content5">
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2
                    className="text-uppercase  animate-fade-up animate-once animate-duration-[2800ms]"
                    style={{
                      fontSize: "1.8em",
                      fontWeight: "bolder",
                      color: "#273240",
                      lineHeight: "38px",
                      marginTop: "1rem",
                    }}
                  >
                    Conecte a Firepay a uma ou várias
                    <span style={{ color: "#1D3D91" }}>
                      <strong> adquirentes</strong>
                    </span>
                  </h2>
                  <br />
                </div>

                <p className="mt-2 animate-fade-up animate-once animate-duration-[2800ms]">
                  Com poucos cliques você integra a Firepay com várias
                  plataformas. Com a nossa multi adquirência, baseada em
                  arquitetura de software moderna e arrojada, nossos clientes
                  aumentaram a taxa de aprovação em 4%, em média.
                </p>
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
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    style={{}}
                    className="img-fluid rounded img-hero"
                    src={Integracao}
                    alt="Time de vendas"
                  />
                </figure>
              </div>
              {/*<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    className="img-fluid rounded img-hero"
                    src={Upsell}
                    alt="Time de designers"
                  />
                </figure>
                </div>*/}
            </div>
            <div className="mt-4">
              <h3
                className="text-center text-uppercase"
                style={{
                  fontSize: "1.2em",
                  fontWeight: "bolder",
                  color: "#273240",
                  lineHeight: "38px",
                  marginTop: "1rem",
                }}
              >
                Plataformas de Integração
              </h3>
              <div id="companys" className="grid grid-cols-5 gap-4">
                <div className="box-company">
                  <img className="" src={Nuvemshop} alt="" />
                </div>
                <div className="box-company">
                  <img src={Bling} alt="" />
                </div>
                <div className="box-company">
                  <img src={Hubsell} alt="" />
                </div>
                <div className="box-company">
                  <img src={Plugg} alt="" />
                </div>
                <div className="box-company">
                  <img src={Woocommerce} alt="" />
                </div>
                <div className="col-start-5 row-start-2 box-company ">
                  <img src={Shopify} alt="" />
                </div>
                <div className="col-start-4 row-start-2 box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="col-start-3 row-start-2 box-company">
                  <img src={Magento} alt="" />
                </div>
                <div className="col-start-2 row-start-2 box-company">
                  <img src={Tray} alt="" />
                </div>
                <div className="col-start-1 row-start-2 box-company">
                  <img src={Nfservice} alt="" />
                </div>
              </div>
            </div>
            <div className="container flex justify-center mt-4">
              <div className="flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
                <div className="md:flex items-center justify-center md:w-1/2 md:bg-blue-700">
                  <div className="py-6 px-8 md:py-0">
                    <h2 className="text-gray-700 text-3xl font-bold md:text-gray-100">
                      Inscreva-se para atualizações do projeto
                    </h2>
                    <p className="mt-2 text-gray-600 md:text-gray-400"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-blue-700">
                  <form>
                    <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                      <input
                        className="py-3 px-4 pr-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                        type="text"
                        name="email"
                        placeholder="Digite seu email"
                      />
                      <button className="py-3 px-4 bg-blue-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">
                        enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
