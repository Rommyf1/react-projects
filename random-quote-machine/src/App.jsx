import { useState } from "react";
import { colors } from "./constants/constants";
import { getColor } from "./utils/quotes";
import { getRandomQuote } from "./utils/quotes";
import QuoteBox from "./components/QuoteBox";

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

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
