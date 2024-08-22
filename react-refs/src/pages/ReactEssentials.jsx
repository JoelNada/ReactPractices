import React, { useState } from "react";
import Header from "../components/Header";
import jsxImg from "../assets/jsx-ui.png";
import componentImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import stateImg from "../assets/state-mgmt.png";

import CoreConcepts from "../components/CoreConcepts";
import Examples from "../components/Examples";

export default function ReactEssentials() {
  const [titleData, setTitleData] = useState("");
  const onSelectComponent = () => {
    console.log("Hello, World !(component)");
    setTitleData("components");
  };

  const onSelectJSX = () => {
    console.log("Hello, World !(JSX)");
    setTitleData("jsx");
  };

  const onSelectProps = () => {
    console.log("Hello, World !(props)");
    setTitleData("props");
  };

  const onSelectStateMgmt = () => {
    console.log("Hello, World !(state management)");
    setTitleData("state");
  };

  const concepts = [
    {
      title: "Components",
      image: componentImg,
      description:
        "The core UI building block-compose the user interface by combining multiple components",
      method: onSelectComponent,
    },
    {
      title: "JSX",
      image: jsxImg,
      description:
        "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered ",
      method: onSelectJSX,
    },
    {
      title: "Props",
      image: propsImg,
      description:
        "Make Components configurable (and therefore usable) by passing input data into them.",
      method: onSelectProps,
    },
    {
      title: "State",
      image: stateImg,
      description:
        "React managed data which, when changed causes the component to re-render and UI to update",
      method: onSelectStateMgmt,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts concepts={concepts} />
        <Examples concepts={concepts} titleData={titleData} />
        <button className="button">Tic Tac Toe</button>
      </main>
    </>
  );
}
