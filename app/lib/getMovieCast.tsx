export default async function getMovieCast(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=654fecaf5f75d499377596f1d93ef894`
  );
  if (!res.ok) throw new Error("fail");

  const data: CastApiResponse = await res.json();
  return data.cast
}
