import DOMPurify from "dompurify";

export default function Preview({ codeFormated }) {
  const sanitizeCode = () => {
    const sanitizedCode = DOMPurify.sanitize(codeFormated);
    return sanitizedCode;
  };
  return (
    <div id="preview-wrapper" className="preview-wrapper">
      <div
        id="preview"
        className="preview-content"
        dangerouslySetInnerHTML={{
          __html: sanitizeCode(),
        }}
      ></div>
    </div>
  );
}
