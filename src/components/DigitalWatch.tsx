import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useForceRerender } from "../hooks/useForceRerender";
import { DigitNum } from "../types";
import { Digit } from "./Digit";
import { Separator } from "./Separator";

const Root = styled.div`
  display: flex;
`;
export function DigitalWatch() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const digits = [
    hours[0],
    hours[1],
    minutes[0],
    minutes[1],
    seconds[0],
    seconds[1],
  ];
  const [isSeparatorVisible, setIsSeparatorVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSeparatorVisible(!isSeparatorVisible);
    }, 500);
  }, [isSeparatorVisible]);
  console.log({isSeparatorVisible});
  return (
    <Root>
      {digits.map((digit, index) => (
        <Fragment key={index}>
          <Digit digit={Number(digit) as DigitNum} />
          {index < digits.length - 1 && index % 2 === 1 ? (
            <Separator isActive={isSeparatorVisible} />
          ) : null}
        </Fragment>
      ))}
    </Root>
  );
}
