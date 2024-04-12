/*import {
  CATS_FACTS_API_LINK,
  // CATS_RANDOM_IMAGE_API_LINK,
  // CATS_IMAGE_ENDPOINT,
} from "./constants/constants";*/
//import getFirstWord from "./utils/getFirstWord";
//import { useState, useEffect } from "react";
import useCatFact from "./hooks/useCatFact";
import useCatImage from "./hooks/useCatImage";

export default function App() {
  //const [catFact, setCatFact] = useState();
  const { catFact, updateCatFact } = useCatFact();
  const { catImage } = useCatImage({ catFact });
  /*const [firstWord, setFirstWord] = useState("");
  const [catImageLink, setCatImageLink] = useState("../public/vite.svg");

  useEffect(() => {
    fetch(CATS_FACTS_API_LINK)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error al hacer la petición al Fact de Gatitos");

        return response.json();
      })
      .then(({ fact }) => {
        //    const firstWord = getFirstWord(fact);
        setCatFact(fact);
        //     setFirstWord(firstWord);
      })
      .catch((error) => console.log(error));
  }, []);*/

  /*useEffect(() => {
    if (!catFact) return;
    const catImageQuery = `${CATS_RANDOM_IMAGE_API_LINK}${firstWord}?json=true`;
    fetch(catImageQuery)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error al hacer la petición a la imagen del gatito");
        return response.json();
      })
      .then(({ url }) => {
        const catURL = `${CATS_IMAGE_ENDPOINT}${url}`;
        setCatImageLink(catURL);
      })
      .catch((error) => console.log(error));
  }, [catFact]);
*/

  const handleClick = async () => {
    updateCatFact();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-sky-700">Aplicación de Gatitos</h1>
      <article className="flex flex-col items-center">
        <img
          src={catImage}
          alt={`Random Cat Image for the text ${catFact}`}
          className="w-96"
        />
        <p>{catFact}</p>
        <button onClick={handleClick}>Other Fact</button>
      </article>
    </main>
  );
}
