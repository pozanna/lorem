import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Title.css";

function Title(props) {
  return <h2>{props.titleText}</h2>;
}

export default Title;
