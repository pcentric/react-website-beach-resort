import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { rooms, sortedRooms, loading } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <React.Fragment>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </React.Fragment>
        );
      }}
    </RoomConsumer>
  );
}
