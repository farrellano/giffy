import React from "react";
import Gif from "components/Gif/gif";
import useGlobalGifs from "hooks/useGlobalGifs";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const singleGif = gifs.find((g) => g.id === params.id);

  return <Gif {...singleGif} />;
}
