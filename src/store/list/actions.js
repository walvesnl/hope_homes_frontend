import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { API_URL } from "../../config/constants";
import { fetchList } from "./slice";

export const getList = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = getState().user.token;
      const response = await axios.get(`${API_URL}/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      dispatch(fetchList(response.data));

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
