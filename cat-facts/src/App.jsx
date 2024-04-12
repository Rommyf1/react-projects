import useCatFact from "./hooks/useCatFact";
import useCatImage from "./hooks/useCatImage";

export default function App() {
  const { catFact, updateCatFact } = useCatFact();
  const { catImage } = useCatImage({ catFact });
  
  const handleClick = async () => {
    updateCatFact();
  };

  return (
    <main className="min-h-screen w-5/6 flex flex-col items-center justify-center gap-6 mx-auto md:max-w-5xl">
      <h1 className="text-sky-700">Aplicación de Gatitos</h1>
      <article className="flex flex-col items-center gap-4">
        <img
          src={catImage}
          alt={`Random Cat Image for the text ${catFact}`}
          className="w-96"
        />
        <p className="text-pretty">{catFact}</p>
        <button onClick={handleClick} className="bg-sky-500 mt-4 py-2 px-2 outline-none rounded-md shadow-lg hover:bg-sky-700" >Other Fact</button>
      </article>
    </main>
  );
}
