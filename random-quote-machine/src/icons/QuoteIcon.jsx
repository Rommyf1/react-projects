export default function QuoteIcon({ primaryColor }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="quote-icon"
      alt="Quote Icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        color: primaryColor,
        transition: "color .1s",
      }}
    >
      <path
        fillRule="evenodd"
        d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
