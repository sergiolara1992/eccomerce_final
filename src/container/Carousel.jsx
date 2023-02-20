import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../imgs/logo.png";
import Image1 from "../imgs/Svg1.png";
import Image2 from "../imgs/Svg2.png";
import Image3 from "../imgs/Svg3.png";

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading)
    return (
      <div className="Login Login__bg">
        <div>
          <img src={Logo} alt="Logo" width="150" />
        </div>
      </div>
    );
  return (
    <div className="Login">
      <div className="Login__carousel">
        <ul>
          <li key="img-carousel-1">
            <img src={Image1} alt="Info image 1" />
            <span>
              Choose what to eat choosing from a variety of restaurants from the
              list
            </span>
          </li>
          <li key="img-carousel-2">
            <img src={Image2} alt="Info image 2" />
            <span>
              Choose where you want to deliver by indicating on the map
            </span>
          </li>
          <li key="img-carousel-3">
            <img src={Image3} alt="Info image 3" />
            <span>We will deliver as soon as possible</span>
          </li>
        </ul>
      </div>
      <div className="Login__button">
        <button type="button" onClick={() => navigate("/login")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;