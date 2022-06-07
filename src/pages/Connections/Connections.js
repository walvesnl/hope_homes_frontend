import { useSelector } from "react-redux";
import { selectReceivedRequests } from "../../store/user/selectors";

export default function Connections() {
  const requests = useSelector(selectReceivedRequests);

  return (
    <div>
      {requests !== null ? (
        <div>
          <h2>Requests received</h2>
          {requests.length !== 0 ? (
            requests.map((r) => {
              return <p>{r.senderId}</p>;
            })
          ) : (
            <p>No requests received</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
