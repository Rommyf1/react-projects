export default function NewQuoteButton({ primaryColor, newQuote }) {
  return (
    <div
      style={{ borderColor: primaryColor }}
      id="new-quote-wrapper"
      className="new-quote-wrapper"
    >
      <button
        onClick={newQuote}
        style={{
          backgroundColor: primaryColor,
          transition: "all 1.5s",
          borderColor: primaryColor,
        }}
        id="new-quote"
        className="new-quote"
      >
        New Quote
      </button>
    </div>
  );
}
