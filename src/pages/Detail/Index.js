import React from "react";
import Gif from "components/Gif/gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  //const gifs = useGlobalGifs();
  //const singleGif = gifs.find((g) => g.id === params.id);

  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : "";

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <div>Cargando ...</div>
      </>
    );
  if (isError) return <Redirect to="/404"></Redirect>;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Gif {...gif} />
    </>
  );
}
