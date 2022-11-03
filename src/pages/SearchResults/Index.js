import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "components/ListOfGifs/listOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

export default function Search({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs
    ? `${gifs.length} resultados de ${decodeURI(keyword)}`
    : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );

  //Use callback evita volver a llamar a la misma funcion entre renderizado

  useEffect(
    function () {
      console.log(isNearScreen);
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title}></meta>
          </Helmet>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      <br />
    </>
  );
}
