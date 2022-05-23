import React from "react";
import useWindowSize from "../utils/useWindowSize";

export default function ResponsiveRendering() {
  const { width } = useWindowSize();

  return <div>{width > 800 ? <p>800+</p> : <p>800-</p>}</div>;
}
