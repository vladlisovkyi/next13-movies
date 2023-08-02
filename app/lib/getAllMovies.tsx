export default async function getAllMovies(movielist: string, page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movielist}?page=${page}&api_key=654fecaf5f75d499377596f1d93ef894`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("fail");
  const data: MovieApiResponse = await res.json();
  return {
    results: data.results,
    total_pages: data.total_pages,
  };
}
