import { CATS_FACTS_API_LINK } from "../constants/constants";
import { useState, useEffect } from "react";
import getFilteredData from "../utils/getCatsData";

export default function useCatFact() {
  const [catFact, setCatFact] = useState();

  const endpointURL = CATS_FACTS_API_LINK;
  const property = "fact";

  const updateCatFact = () => {
    getFilteredData({ endpointURL, property })
      .then((fact) => setCatFact(fact))
      .catch((error) => console.log(error));
  };

  useEffect(updateCatFact, []);

  return { catFact, updateCatFact };
}
