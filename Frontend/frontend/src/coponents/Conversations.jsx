import Converation from "./Converation";
import useGetConversations from "../Hookes/useGetConversations";
import { getRandomEmoji } from "../utils/Emojis";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  console.log(conversations, "chatting friends");
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Converation
          key={conversation._id}
          data={conversation}
          lastind={idx === conversation.length - 1}
          emoji={getRandomEmoji()}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
