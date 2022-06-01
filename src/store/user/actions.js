import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { loginSuccess, logOut, tokenStillValid } from "./slice";
import { API_URL } from "../../config/constants";

export const signUp = (
  name,
  email,
  password,
  image,
  description,
  address,
  city,
  country,
  isHost
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const data = new FormData();

      data.append("name", name);
      data.append("email", email);
      data.append("password", password);
      data.append("image", image);
      data.append("description", description);
      data.append("address", address);
      data.append("city", city);
      data.append("country", country);
      data.append("isHost", isHost);

      const response = await axios.post(`${API_URL}/auth/signup`, data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(response);
      // dispatch(
      //   loginSuccess({ token: response.data.token, user: response.data.user })
      //  );
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};
