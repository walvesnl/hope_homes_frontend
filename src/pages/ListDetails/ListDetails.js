import { useEffect, useState } from "react";
import { getOne } from "../../store/list/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectOne } from "../../store/list/selectors";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/constants";

export default function ListDetails() {
  const { id } = useParams();
  const user = useSelector(selectOne);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  console.log(user);
  return (
    <div>
      {user !== null ? (
        <div>
          <h1>{user.name}'s Profile</h1>
          <img
            src={`${API_URL}/${user.image}`}
            style={{ maxWidth: 300, maxHeight: "auto" }}
            alt="qsaco"
          />
          <p>{user.name}</p>
          <p>{user.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
