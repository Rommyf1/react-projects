import { useState } from "react";
import { colors } from "./constants/constants";
import { getColor } from "./utils/quotes";
import { getQuotesData } from "./utils/quotes";
import QuoteBox from "./components/QuoteBox";

export default function App() {
  const [quotesData, setQuotesData] = useState({
    quote: "",
    author: "",
    primaryColor: getColor(colors),
  });

  const setNewQuote = async () => {
    const randomQuote = await getQuotesData();
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
        newQuote={setNewQuote}
      />
    </div>
  );
}
