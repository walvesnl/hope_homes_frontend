import { useSelector } from "react-redux";
import { selectReceivedRequests } from "../../store/user/selectors";
import RequestCard from "../../components/RequestCard/RequestCard";

export default function Connections() {
  const requests = useSelector(selectReceivedRequests);

  return (
    <div>
      {requests !== null ? (
        <div>
          <h2>Requests received</h2>
          {requests.length !== 0 ? (
            requests.map((r) => {
              return (
                <RequestCard
                  key={r.id}
                  id={r.senderId}
                  name={r.senderName}
                  image={r.senderImage}
                />
              );
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
