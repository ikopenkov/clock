import { useEffect, useState } from "react";
import styled from "styled-components";
import { DigitalWatch } from "./components/DigitalWatch";

const Root = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Root>
      <DigitalWatch />
    </Root>
  );
}

export default App;
