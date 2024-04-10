import { useState, useEffect, useRef } from "react";

export default function useSearch() {
  const [search, setSearch] = useState("");
  const [inputError, setError] = useState(null);
  const isInitialValue = useRef(true);

  useEffect(() => {
    if (isInitialValue.current) {
      isInitialValue.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }
    if (search.length < 3) {
      setError("No se pueden buscar películas con menos de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, inputError, setSearch };
}
