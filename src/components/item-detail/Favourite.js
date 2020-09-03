import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavourites } from "../../hooks/useFavourites";
import { useStore } from "../../context";

export const FavouriteButton = ({ movieID, title, poster_path }) => {
  const { setFavourites } = useFavourites();
  const { favourites } = useStore();

  const isFavourite = favourites.some((fav) => fav.id === movieID);

  const movie = {
    id: movieID,
    title: title,
    poster_path: poster_path,
  };
  return (
    <AddFavourite
      onClick={() => setFavourites(movie)}
      isFavourite={isFavourite}
    >
      {isFavourite ? (
        <>
          <AiFillHeart />
        </>
      ) : (
        <>
          <AiOutlineHeart />
        </>
      )}
    </AddFavourite>
  );
};

const AddFavourite = styled.button`
  width: auto;
  padding: 10px;
  background: ${(p) => p.theme.colors.dark};
  border: 1px solid ${(p) => p.theme.colors.lightGrey};
  border-radius: 4px;
  color: ${(p) => p.theme.colors.lightGrey};
  margin-right: 20px;
  cursor: pointer;
  font-family: ${(p) => p.theme.font};
  font-size: ${(p) => p.theme.fontWeights.xs.size};

  :hover {
    background: #ff4040;
    border: 1px solid #ff4040;
    color: ${(p) => p.theme.colors.white};
  }

  :after {
    content: " Add to Favourites";
  }

  ${(p) =>
    p.isFavourite &&
    css`
      :after {
        content: " Favourited";
      }

      background: #ff4040;
      color: #ffffff;
      border: 1px solid #ff4040;
    `}

  @media (max-width:1000px) {
    :after {
      content: "";
    }
  }
`;
