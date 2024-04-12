import useCatFact from "./hooks/useCatFact";
import useCatImage from "./hooks/useCatImage";

export default function App() {
  const { catFact, updateCatFact } = useCatFact();
  const { catImage } = useCatImage({ catFact });
  
  const handleClick = async () => {
    updateCatFact();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-sky-700">Aplicación de Gatitos</h1>
      <article className="flex flex-col items-center">
        <img
          src={catImage}
          alt={`Random Cat Image for the text ${catFact}`}
          className="w-96"
        />
        <p>{catFact}</p>
        <button onClick={handleClick}>Other Fact</button>
      </article>
    </main>
  );
}
