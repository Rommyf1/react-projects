function Movies({ movies }) {
  return (
    <>
      <ul className="w-full max-w-4xl grid grid-cols-auto-fit-200 place-items-center gap-6 px-6">
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3 className="text-white">{movie.title}</h3>
            <span className="text-white block my-2">{movie.year}</span>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    </>
  );
}

function NoMovieFound() {
  return (
    <>
      <p className="text-white p-6">La película no fue encontrada</p>
    </>
  );
}

export default function ResultsMovies({ listOfMovies }) {
  const hasMovies = listOfMovies?.length > 0;

  return hasMovies ? <Movies movies={listOfMovies} /> : <NoMovieFound />;
}
