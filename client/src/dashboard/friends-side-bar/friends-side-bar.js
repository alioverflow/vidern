import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./add-friend-button";
import FriendsTitle from "./friends-title";
import FriendsList from "./friends-list/friends-list";
import PendingInvitationsList from "./pending-invitations-list/pending-invitations-list";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
