import React, { useCallback, useMemo } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/listOfGifs";
import TrendingSearches from "components/TrendingSearch";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SeachForm/Index";
import { Helmet } from "react-helmet";

export default function Home() {
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  // uso useCalback para evitar que se cree la funcion al momento de renderizar el componente
  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  /*const element = useMemo(
    () => ,
    [handleSubmit]
  );*/
  //

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <h4>Gifs </h4>
      <SearchForm onSubmit={handleSubmit} />
      <h3>Ultima Busqueda ...</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}
