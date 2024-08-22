import React from "react";

export default function TabsComponent({
  children,
  buttons,
  buttonContainer = "menu",
}) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
