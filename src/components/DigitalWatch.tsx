import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForceRerender } from "../hooks/useForceRerender";
import { Digit } from "./Digit";

const Root = styled.div`
  display: flex;
`;
export function DigitalWatch() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const digits = [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];
  const [forceRerender, rerenderValue] = useForceRerender();
  useEffect(() => {
    setTimeout(forceRerender, 1000);
  }, [rerenderValue])
  return (
    <Root>
      {digits.map((digit, index) => (
        <Digit digit={Number(digit)} key={index} />
      ))}
    </Root>
  );
}

