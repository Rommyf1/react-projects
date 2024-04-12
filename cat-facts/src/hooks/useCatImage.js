import { useState, useEffect } from "react";
import {
  CATS_IMAGE_ENDPOINT,
  CATS_RANDOM_IMAGE_API_LINK,
} from "../constants/constants";
import getFirstWord from "../utils/getFirstWord";
import getFilteredData from "../utils/getCatsData";

export default function useCatImage({ catFact }) {
  const [catImageLink, setCatImageLink] = useState("vite.svg");

  useEffect(() => {
    if (!catFact) return;

    const firstWord = getFirstWord(catFact);
    const endpointURL = `${CATS_RANDOM_IMAGE_API_LINK}${firstWord}?json=true`;
    const property = "_id";

    getFilteredData({ endpointURL, property })
      .then((imageIdentifier) =>
        setCatImageLink(`${CATS_IMAGE_ENDPOINT}/${imageIdentifier}/says/${firstWord}`)
      )
      .catch((error) => console.log(error));
  }, [catFact]);

  return { catImage: catImageLink };
}
