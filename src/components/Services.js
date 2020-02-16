import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBeer />,
        title: "Free Strongest beer",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
