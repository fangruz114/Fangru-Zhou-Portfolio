import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117447535-f00a3a00-af3d-11eb-89bf-45aaf56dbaf1.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117208135-11134380-adf5-11eb-8878-040fd0f015b2.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117364277-fc4eb280-aebd-11eb-8769-a3583c6a2037.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117364276-fc4eb280-aebd-11eb-92ba-8a6ef74b7313.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/117533873-484d4480-afef-11eb-9fad-67c8605e3592.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://khalilstemmler.com/img/blog/sequelize/banner.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://raw.githubusercontent.com/github/explore/2d218e3aa252dc90eef269b34eeec1fbd15dc07e/topics/sqlite/sqlite.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/182618272-390ab138-7b29-44a0-85a2-62633957d815.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/183577745-799bb814-d819-4886-903c-a680bfcd5714.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="https://user-images.githubusercontent.com/25181517/182618508-1b12183b-5398-48d2-92e7-ff0969a22624.png" alt="partners brand" />
        </li>

      </Slider>
    </ul>
  );
}
