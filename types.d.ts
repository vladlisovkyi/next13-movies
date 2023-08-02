type MovieApiResponse = {
  results: IMovie[];
  total_pages: number;
};

type CastApiResponse = {
  id: number;
  cast: ICastActors[];
};

type IMovie = {
  id: number;
  title: string;
  poster_path: string;
};

type ProductionCountries = {
  name: string;
};

type IDetailMovie = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  vote_average: number;
  vote_count: number;
  release_date: string;
  runtime: number;
  production_countries: ProductionCountries[];
};

type ICastActors = {
  id: number;
  known_for_department: string;
  name: string;
};
