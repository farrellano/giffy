import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import useGlobalGifs from "./useGlobalGifs";

export default function useSingleGif({ id }) {
  const { gifs } = useGlobalGifs();

  const gifFromCache = gifs ? gifs.find((g) => g.id === id) : null;

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    function () {
      if (!gif) {
        setIsLoading(true);
        getSingleGif({ id })
          .then((g) => {
            setGif(g);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
          });
      }
    },
    [gif, id]
  );

  return { gif, isLoading, isError };
}
