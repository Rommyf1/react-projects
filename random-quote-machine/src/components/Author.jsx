export default function Author({ primaryColor, author }) {
  return (
    <div id="author-wrapper" className="author-wrapper">
      <h3
        style={{ color: primaryColor, transition: "all 1.5s" }}
        id="author"
        className="author"
      >
        -{author}
      </h3>
    </div>
  );
}
