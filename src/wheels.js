import Images from "./images.js";

import React, { useEffect, useRef } from "react";

export const WheelsRims = () => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-wheel");
        } else {
          entry.target.classList.remove("show-wheel");
        }
      });
    })
  );

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden-wheel");
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);

  return (
    <div className="App-header">
      <div className="div-h1">
        {" "}
        <p>Products</p>{" "}
      </div>

      <ul className="ul-list-wheels hidden-wheel">
        <li className="li-list-wheels">
          <a href="https://www.wheelpros.com/fuel-1pc-catalyst" target="blank">
            {" "}
            <img className="bg-img" src={Images.Rims1} />
          </a>
          <p>CATALYST</p> <p>Click to Check price</p>
        </li>

        <li className="li-list-wheels">
          <a
            href="https://www.wheelpros.com/black-rhino-stallberg"
            target="blank"
          >
            <img className="bg-img" src={Images.Rims2} />
          </a>
          <p>Black Rhino</p> <p>Click to Check price</p>
        </li>
        <li className="li-list-wheels">
          <a href="https://www.wheelpros.com/fuel-1pc-brawl" target="blank">
            <img className="bg-img" src={Images.Rims3} />{" "}
          </a>
          <p>Off-road Burn</p> <p>Click to Check price</p>
        </li>

        <li className="li-list-wheels">
          <a href="https://www.wheelpros.com/kmc-range" target="blank">
            <img className="bg-img" src={Images.Rims4} />{" "}
          </a>
          <p>KMC Wheels</p> <p>Click to Check price</p>
        </li>

        <li className="li-list-wheels">
          <a href="https://www.wheelpros.com/fuel-1pc-burn" target="blank">
            <img className="bg-img" src={Images.Rims5} />
          </a>{" "}
          <p>Off-road burn</p> <p>Click to Check price</p>
        </li>

        <li className="li-list-wheels">
          <a
            href="https://www.wheelpros.com/msa-offroad-wheels-thunderlips"
            target="blank"
          >
            <img className="bg-img" src={Images.Rims6} />
          </a>
          <p> MSA OffRoad</p> <p>Click to Check price</p>
        </li>

        <li className="li-list-wheels">
          <a href="https://www.wheelpros.com/dub-1pc-honcho" target="blank">
            <img className="bg-img" src={Images.Rims7} />
          </a>
          <p> Dub Honcho</p> <p>Click to Check price</p>
        </li>

        <li className="li-list-wheels ">
          <a
            href="https://www.wheelpros.com/performance-replicas-pr213"
            target="blank"
          >
            <img className="bg-img " src={Images.Rims8} />
          </a>
          <p> Performance replicas</p> <p>Click to Check price</p>
        </li>
      </ul>
    </div>
  );
};

export default WheelsRims;
