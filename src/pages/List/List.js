import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getList } from "../../store/list/actions";

export default function List() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  return <h1>List</h1>;
}
