import { useRef } from "react";
import { useEffect } from "react";

export default function useSEO({ description, title }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute("content")
  );

  useEffect(() => {
    const previousTitle = prevTitle.current;
    document.title = `${title} | Giffy`;

    return () => (document.title = previousTitle); //Con esta funcion devuelvo el title previo
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;
    if (description) {
      metaDescription.setAttribute("content", description);
    }
    return () => metaDescription.setAttribute("content", previousDescription);
  }, [description]);
}
