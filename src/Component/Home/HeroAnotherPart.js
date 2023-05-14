import React from "react";

const HeroAnotherPart = () => {
  return (
    <section id="playercard">
      <div className="container">
        <div className="playercard_Wrapper">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="play_cart_Design bg-danger marginclassName">
                <img
                  alt="img"
                  src="https://i.ibb.co/h84c3bC/undraw-Gift-box-re-vau4.png"></img>
                <div className="play_text_el text-lg-center">
                  <h1 className="text-black">Gift To Your Favourite</h1>
                  <p className="text-black">Floor: 50% </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-lg-flex align-items-lg-center position-relative">
              <div className="w_el">
                <h1>How it work</h1>
              </div>
              <div className="img-el position-absolute">
                <img
                  src="https://iteck-html.themescamp.com/assets/img/header/header_12_linearrow.png"
                  alt="img"></img>
              </div>
              <div className="yotube-click ms-lg-auto">
                <img
                  alt="img"
                  src="https://i.ibb.co/r26mYhr/undraw-For-sale-re-egkk.png"></img>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="play_cart_Design bg-danger">
                <img
                  alt="img"
                  src="https://i.ibb.co/pn8p6h4/undraw-Sunlight-re-0usx.png"></img>
                <div className="play_text_el text-lg-center">
                  <h1 className="text-black">Tree Goddies</h1>
                  <p className="text-black">Floor: 20% off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAnotherPart;
