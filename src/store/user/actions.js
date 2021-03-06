import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import {
  deleteRequest,
  loginSuccess,
  logOut,
  newConversation,
  requestSent,
  tokenStillValid,
} from "./slice";
import { apiUrl } from "../../config/constants";
import { selectToken } from "./selectors";
import { clearList } from "../list/slice";

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

      const response = await axios.post(`${apiUrl}/auth/signup`, data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(response);
      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
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

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid({ user: response.data }));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(clearList());
      dispatch(appDoneLoading());
    }
  };
};

export const newRequest = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/request`,
        { receiverId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(requestSent(response.data.newRequest));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
      dispatch(appDoneLoading());
    }
  };
};

export const requestAccepted = (id, name, image, requestId) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/conversation`,
        { id, name, image, requestId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(newConversation(response.data.newConversation));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
      dispatch(appDoneLoading());
    }
  };
};

export const denyRequest = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.delete(`${apiUrl}/request/delete/${id}`);

      console.log(response);

      dispatch(deleteRequest(id));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
      dispatch(appDoneLoading());
    }
  };
};
