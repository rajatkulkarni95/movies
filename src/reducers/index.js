const initialState = {
  searchText: "batman",
  isFavourite: false,
  trending: [],
  user: {},
  mostPopular: [],
  searchFiltered: [],
  genres: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchText: action.payload,
      };
    case "FAVOURITE":
      return {
        ...state,
        isFavourite: action.payload,
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
    case "GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}

export { initialState, reducer };
