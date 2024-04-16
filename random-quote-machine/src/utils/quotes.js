//Obtener indice aleatorio de un array
export const getRandomIndex = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

//Obtener un Color Aleatoriamente de un Array de Colores
export const getColor = (colors) => {
  const colorIndex = getRandomIndex(colors);
  return colors[colorIndex];
};

//Obtener una Frase Aleatoria de un Array de Frases (Obtenidas del API)
export const getRandomQuote = (quoteData) => {
  const randomQuote = getRandomIndex(quoteData.quotes);
  return quoteData.quotes[randomQuote];
};

//Obtener Datos de una API externa y asignar al estado los datos de las Frases que la API provee
export const getQuotesData = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  );
  const quoteData = await response.json();

  return getRandomQuote(quoteData);
};
