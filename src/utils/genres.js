import { useStore } from "../context";

export const CalcGenres = () => {
  const { genres } = useStore();

  const movieGenres = ({ genre_ids, id }) =>
    genre_ids.map((genre) => genres.find(({ id }) => id === genre));

  return movieGenres;
};
