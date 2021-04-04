import React from "react";
import CardSingle from "../Card/Card";
import { InfoContext } from "../../context/ContextApi";

const Cards = () => {
  const cardInfo = React.useContext(InfoContext);
  return (
    <div className="card-group">
      {cardInfo.map((info) => (
        <div className="col-sm-4">
          <CardSingle
            title={info.title}
            site={info.site}
            tech={info.tech}
            picture={info.picture}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
