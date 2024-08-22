import React, { useState } from "react";
import FormControl from "./FormControl";

export default function UserInputComponent({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <FormControl
          label={"Initial Investment"}
          type={"number"}
          value={userInput.initialInvestment}
          required
          onChange={(e) =>
            onChange("initialInvestment", Number(e.target.value))
          }
        />
        <FormControl
          label={"Annual Investment"}
          type={"number"}
          value={userInput.annualInvestment}
          required
          onChange={(e) => onChange("annualInvestment", Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <FormControl
          label={"Expected Return"}
          type={"number"}
          value={userInput.expectedReturn}
          required
          onChange={(e) => onChange("expectedReturn", Number(e.target.value))}
        />

        <FormControl
          label={"Duration"}
          type={"number"}
          required
          value={userInput.duration}
          onChange={(e) => onChange("duration", Number(e.target.value))}
        />
      </div>
    </section>
  );
}
