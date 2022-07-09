import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { apiUrl } from "../../config/constants";
import { fetchList, fetchOne } from "./slice";

export const getList = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = getState().user.token;
      const response = await axios.get(`${apiUrl}/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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

export const getOne = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = getState().user.token;
      const response = await axios.get(`${apiUrl}/list/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      dispatch(fetchOne(response.data));

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
