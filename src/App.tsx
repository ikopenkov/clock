import { useEffect, useState } from "react";
import styled from "styled-components";
import { DigitalWatch } from "./components/DigitalWatch";
import { Watch } from "./components/Watch";

const Root = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  // const [hour, setHour] = useState(9);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHour(hour === 0 ? 9 : hour - 3);
  //   }, 3000);
  // }, [hour]);
  return (
    <Root>
      {/* <Watch h={hour} /> */}
      <DigitalWatch />
    </Root>
  );
}

export default App;
