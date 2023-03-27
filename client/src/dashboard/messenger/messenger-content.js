import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./messages/messages";
import NewMessageInput from "./new-message-input";
import { getDirectChatHistory } from "../../realtime-communication/socket-connection";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
