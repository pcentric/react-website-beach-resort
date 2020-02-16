import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomContainer";
import { Link } from "react-router-dom";
export default class Room extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero hero="roomsHero">
          <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
              return Home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </React.Fragment>
    );
  }
}
