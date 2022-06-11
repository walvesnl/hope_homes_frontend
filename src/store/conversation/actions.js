import { appDoneLoading, appLoading } from "../appState/slice";
import { fetchConversation } from "./slice";
import axios from "axios";
import { API_URL } from "../../config/constants";

export const getConversations = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = getState().user.token;
      const response = await axios.get(`${API_URL}/conversation/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      dispatch(fetchConversation(response.data));

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
