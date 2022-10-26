import React from "react";
import { Link } from "wouter";

export default function Category({ options = [] }) {
  return (
    <ul>
      {options.map((d) => (
        <li key={d}>
          <Link to={`/search/${d}`}>
            <h4>{d}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}
