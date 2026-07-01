import React, { useState, useEffect, useContext } from "react";
import ConnectionMsg from "./comps/ConnectionMsg";
import { themeContext } from "../../store/useContex";

function App({ roomId }) {

  const [chatUrl, setChatUrl] = useState("https://localhost:");

  useEffect(() => {
    const connection = ConnectionMsg(chatUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, chatUrl]);

  let UrlVal = chatUrl + roomId

  return (
    <>
      <label>
        Server URL:{" "}
        <input value={UrlVal} onChange={(e) => setChatUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

function ChatRooms() {

  const { bgColorCode, textColor, dualVal } = useContext(themeContext)

  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <center style={{ paddingTop: "250px", paddingBottom: "250px", backgroundColor: bgColorCode, color: textColor }}>

      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <App roomId={roomId} />}
    </center>
  );
}

export default ChatRooms;