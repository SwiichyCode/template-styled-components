import React from "react";
import styled from "styled-components";

export default function Theme({ currentTheme, setCurrentTheme }) {
  return (
    <div>
      {" "}
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>{" "}
      <Text>{currentTheme}</Text>
    </div>
  );
}

const Text = styled.p(
  ({ theme }) => `
      color: ${theme.colors.primary}
    `
);
