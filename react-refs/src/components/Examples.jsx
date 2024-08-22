import React from "react";
import Tab from "./Tab";
import { EXAMPLES } from "../data.js";
import TabsComponent from "./TabsComponent";
export default function Examples({ concepts, titleData }) {
  return (
    <section id="examples">
      <h2>Example</h2>
      <TabsComponent
        buttonContainer={"menu"}
        buttons={concepts.map(({ title, method }, index) => (
          <Tab
            key={index}
            onClick={method}
            title={title}
            isSelected={title.toLowerCase() === titleData.toLowerCase()}
          />
        ))}
      ></TabsComponent>
      {titleData.length != 0 ? (
        <div id="tab-content">
          <h3>{EXAMPLES[titleData]?.title}</h3>
          <p>{EXAMPLES[titleData]?.description}</p>
          <pre>
            <code>{EXAMPLES[titleData]?.code}</code>
          </pre>
        </div>
      ) : (
        "Please Click a tab to see the example"
      )}
    </section>
  );
}
