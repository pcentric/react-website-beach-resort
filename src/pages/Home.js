import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxirious Room" subtitle="deluxe room starting @299 ">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </React.Fragment>
  );
}
