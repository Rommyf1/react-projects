export default function Square({ value, position, updateBoard }) {
  const handlePlay = () => {
    updateBoard(position);
  };

  return (
    <div onClick={handlePlay} className="square">
      <span className="square-content">{value}</span>
    </div>
  );
}
