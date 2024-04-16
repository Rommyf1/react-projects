import QuoteIcon from "../icons/QuoteIcon";

export default function QuoteText({ primaryColor, quote }) {
  return (
    <div id="text-wrapper" className="text-wrapper">
      <p
        style={{ color: primaryColor, transition: "all 1.5s" }}
        id="text"
        className="text"
      >
        <QuoteIcon primaryColor />
        {quote}
      </p>
    </div>
  );
}
