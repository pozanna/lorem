import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Description.css";

function Description(props) {
  return <p>{props.descriptionText}</p>;
}

export default Description;
