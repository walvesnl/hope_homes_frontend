import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getList } from "../../store/list/actions";
import { useSelector } from "react-redux";

import ListCard from "../../components/ListCard/ListCard";
import { selectList } from "../../store/list/selectors";
import { selectHost } from "../../store/user/selectors";
import "./styles.css";

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const isHost = useSelector(selectHost);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div className="list">
      <h1>List of {isHost === true ? "Home Seekers" : "Hosts"}</h1>
      {list ? (
        list.map((l) => {
          return (
            <ListCard
              key={l.id}
              id={l.id}
              name={l.name}
              image={l.image}
              description={l.description}
              country={l.country}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
