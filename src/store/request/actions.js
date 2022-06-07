import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { API_URL } from "../../config/constants";
import { fetchReqReceived, fetchReqSent } from "./slice";

export const getReqReceived = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = getState().user.token;
      const response = await axios.get(`${API_URL}/request`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      dispatch(fetchReqReceived(response.data));

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

export const newRequest = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      dispatch(appLoading());

      const response = await axios.post(
        `${API_URL}/request`,
        { receiverId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

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
