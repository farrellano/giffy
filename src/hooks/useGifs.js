import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContextProvider from "../context/GifsContexProvider";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContextProvider);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";
  useEffect(() => {
    setLoading(true);
    if (keyword) localStorage.setItem("lastKeyword", keyword);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
      localStorage.setItem("arrGifs", gifs);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, setGifs]
  );

  return { loading, loadingNextPage, gifs, setPage };
}
