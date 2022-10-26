import React from "react";
import { Link } from "wouter";
import "./gif.css";
function Gif({ title, id, url }) {
  return (
    <div className="ListOfGifs-item">
      <Link to={`/detail/${id}`}>
        <h4>{title}</h4>
        <img className="gif-poster" src={url} key={id} alt="gif" />
      </Link>
    </div>
  );
}

export default React.memo(Gif);
