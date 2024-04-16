import { useState } from "react";
import { colors } from "./constants/constants";
import { getColor } from "./utils/quotes";
import { getRandomQuote } from "./utils/quotes";
import QuoteBox from "./components/QuoteBox";

export default function App() {
  const [quotesData, setQuotesData] = useState({
    quote: "",
    author: "",
    primaryColor: getColor(colors),
  });

  const getQuotesData = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const quoteData = await response.json();
    const randomQuote = getRandomQuote(quoteData);
    setQuotesData({
      quote: randomQuote.quote,
      author: randomQuote.author,
      primaryColor: getColor(colors),
    });
  };

  return (
    <div
      id="app-wrapper"
      style={{
        backgroundColor: quotesData.primaryColor,
        transition: "all 1.5s",
      }}
      className="app-wrapper"
    >
      <QuoteBox
        quote={quotesData.quote}
        author={quotesData.author}
        primaryColor={quotesData.primaryColor}
        newQuote={getQuotesData}
      />
    </div>
  );
}
