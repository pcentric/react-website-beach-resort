import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const Context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = Context;

  let types = getUnique(rooms, "type");
  // get Unique types
  types = ["all", ...types];
  //   Map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className=" filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <lable htmlfor="type">room type</lable>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End Select Type */}
        {/* Guests Type */}
        <div className="form-group">
          <lable htmlfor="capacity">Guests</lable>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End Guests Type */}
        {/* Room Price */}

        <div className="form-group">
          <lable htmlfor="price">Price ${price}</lable>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* End Room Size  */}
        <div className="form-group">
          <lable htmlfor="size">Room Size</lable>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End Room Size  */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlfor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlfor="pets">Pets</label>
          </div>
        </div>
        {/*end of extras */}
      </form>
    </section>
  );
}
