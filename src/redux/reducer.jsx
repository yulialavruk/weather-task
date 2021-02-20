const initialState = {
  city: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, isError: action.payload };

    default:
      return state;
  }
};
