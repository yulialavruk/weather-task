import axios from "axios";

const setCityAction = (payload) => {
  return {
    type: "SET_CITY",
    payload,
  };
};

export const getCity = (searchValue) => (dispatch) => {
  axios
    .get("https://community-open-weather-map.p.rapidapi.com/weather", {
      params: {
        q: searchValue,
        units: "imperial",
      },
      headers: {
        "x-rapidapi-key": "1284548579msh5339dc97def4dbcp1bb147jsn14e318fbfea6",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    })
    .then(({ data }) => {
      dispatch(setCityAction(data));
    })
    .catch(() => {
      console.log("error");
    });
};
