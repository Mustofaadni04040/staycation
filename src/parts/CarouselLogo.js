import React from "react";

import Logo1 from "assets/images/carousel-logo-1.png";
import Logo2 from "assets/images/carousel-logo-2.png";
import Logo3 from "assets/images/carousel-logo-3.png";
import Logo4 from "assets/images/carousel-logo-4.png";
import Logo5 from "assets/images/carousel-logo-5.png";

export default function CarouselLogo() {
  return (
    <section className="companies">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-12">
            <h3 className="medium-header mb-3 font-weight-bold">
              Dipercaya Oleh Company Global
            </h3>
            <p className="mb-4 font-weight-light text-gray-500">
              Perjalanan yang aman dan terpercaya
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-left mb-3">
        <div className="carousel-wrapper-left">
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo1} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo3} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-3" src={Logo4} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo5} alt="logo-brand"></img>
          </div>
        </div>
        <div className="carousel-wrapper-left">
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo1} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo3} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-3" src={Logo4} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo5} alt="logo-brand"></img>
          </div>
        </div>
      </div>
      <div className="carousel-right">
        <div className="carousel-wrapper-right">
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo1} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo3} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-3" src={Logo4} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo5} alt="logo-brand"></img>
          </div>
        </div>
        <div className="carousel-wrapper-right">
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo1} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo3} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-3" src={Logo4} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo mt-5" src={Logo2} alt="logo-brand"></img>
          </div>
          <div className="card-brand mr-3">
            <img className="logo" src={Logo5} alt="logo-brand"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
