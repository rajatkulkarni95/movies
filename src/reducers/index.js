const initialState = {
  searchText: "batman",
  isFavourite: false,
  favourites: [],
  trending: [],
  user: {},
  mostPopular: [],
  searchFiltered: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchText: action.payload,
      };
    case "IS_FAVOURITE":
      return {
        ...state,
        isFavourite: action.payload,
      };
    case "FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };
    case "TRENDING":
      return {
        ...state,
        trending: action.payload,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "MOST_POPULAR":
      return {
        ...state,
        mostPopular: action.payload,
      };
    case "SEARCH_FILTERED":
      return {
        ...state,
        searchFiltered: action.payload,
      };

    default:
      return state;
  }
}

export { initialState, reducer };
