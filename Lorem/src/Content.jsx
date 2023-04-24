import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Content.css";
import Title from "./Title";
import Description from "./Description";

function Content(props) {
  return (
    <div className="container">
      <Title titleText={props.title} />
      <Description descriptionText={props.description} />
    </div>
  );
}
export default Content;
