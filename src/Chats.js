import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Beyonce"
        message="Hey! How are you 😃?"
        timestamp="30 seconds ago"
        profilePic="https://defendernetwork.com/wp-content/uploads/2020/04/Beyonce-Sings-For-Disney-Coronavirus.jpg"
      />
      <Chat
        name="Katy"
        message="Whats up ♥️?"
        timestamp="40 minutes ago"
        profilePic="https://static.billboard.com/files/2020/03/katy-perry-2020-feb-ux-billboard-1548-1583347473-768x433.jpg"
      />
    </div>
  );
}

export default Chats;
