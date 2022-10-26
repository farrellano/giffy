import { useContext } from "react";
import GifsContextProvider from "../context/GifsContexProvider";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContextProvider);
  return gifs;
}
