import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getList } from "../../store/list/actions";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import ListCard from "../../components/ListCard/ListCard";
import { selectList } from "../../store/list/selectors";

export default function List() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const list = useSelector(selectList);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <h1>List</h1>
      {list ? (
        list.map((l) => {
          return (
            <ListCard
              key={l.id}
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
