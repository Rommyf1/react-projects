export default function Editor({ editorText, updateEditorContent }) {
  const handleChange = (event) => {
    updateEditorContent(event.target.value);
  };

  return (
    <div id="editorWrapper" className="editor-wrapper">
      <textarea
        id="editor"
        className="editor"
        value={editorText}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
