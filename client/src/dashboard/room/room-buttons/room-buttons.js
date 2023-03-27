import React from "react";
import { styled } from "@mui/system";
import CameraButton from "./camera-button";
import MicButton from "./mic-button";
import CloseRoomButton from "./close-room-button";
import ScreenShareButton from "./screen-share-button";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/room-actions";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;

  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButtons);
