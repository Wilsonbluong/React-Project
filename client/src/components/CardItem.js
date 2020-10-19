import React from "react";

import { Link } from "@reach/router";

const CardItem = () => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figures className="cards__item__pic-wrap">
            <img src="/" alt="travel image" className="cards__item__img" />
          </figures>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
