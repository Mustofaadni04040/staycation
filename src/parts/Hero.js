import React from "react";

import { Fade } from "react-awesome-reveal";

import ImageHero from "assets/images/img-hero-women.jpg";
import DecorIntersect from "assets/images/Decore.svg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 230, //default 30
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <Fade direction="left" duration={2000}>
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Lupakan Pekerjaan, <br />
              Lakukan Perjalanan Menyenangkan
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Kami menyediakan apa yang Anda butuhkan untuk menikmati liburan
              Anda bersama keluarga.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src="/images/icon-traveler.svg" //public images
                  alt={`$(props.data.travelers) Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src="/images/icon-treasure.svg"
                  alt={`$(props.data.treasures) Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>

              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src="/images/icon-cities.svg"
                  alt={`$(props.data.cities) Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </Fade>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <Fade direction="right" duration={2000}>
              <img
                src={ImageHero}
                alt="Traveller Women"
                className="img-fluid position-absolute"
                style={{ margin: "-70px 0 0 10px", zIndex: 1 }}
              />
            </Fade>
            <img
              src={DecorIntersect}
              alt="Decoration"
              className="position-absolute"
              style={{
                opacity: "0.2",
                width: "766px",
                height: "700px",
                left: "200px",
                top: "-230px",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
