import { useSelector } from "react-redux";
import {
  selectConversations,
  selectHost,
  selectReceivedRequests,
} from "../../store/user/selectors";
import RequestCard from "../../components/RequestCard/RequestCard";
import ConversationCard from "../../components/ConversationCard/ConversationCard";

export default function Connections() {
  const requests = useSelector(selectReceivedRequests);
  const conversations = useSelector(selectConversations);
  const isHost = useSelector(selectHost);

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
      {conversations !== null ? (
        <div>
          <h2>Conversations</h2>
          {conversations.length !== 0 ? (
            conversations.map((c) => {
              if (isHost === true) {
                return (
                  <ConversationCard
                    key={c.id}
                    convId={c.id}
                    userId={c.seekerId}
                    name={c.seekerName}
                    image={c.seekerImage}
                  />
                );
              } else {
                return (
                  <ConversationCard
                    key={c.id}
                    convId={c.id}
                    userId={c.hostId}
                    name={c.hostName}
                    image={c.hostImage}
                  />
                );
              }
            })
          ) : (
            <p>No conversations started</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
