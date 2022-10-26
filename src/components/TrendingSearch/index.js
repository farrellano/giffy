import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

//Tener en consideracion que el lazy load funciona con un observer y el contenido asyncrono puede afectar
export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "100px" });
  return (
    <div ref={fromRef}>
      <Suspense fallback={"Estoy cargando ... "}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
}
