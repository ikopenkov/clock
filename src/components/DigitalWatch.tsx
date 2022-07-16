import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { DigitNum } from "../types";
import { Digit } from "./Digit";
import { Separator } from "./Separator";

const Root = styled.div`
  display: flex;
`;
export function DigitalWatch() {
  const [digits, setDigits] = useState(getDigits());
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, isVisible ? 2000 : 1000);
  }, [isVisible]);
  useEffect(() => {
    setTimeout(() => {
      setDigits(getDigits());
    }, 3000);
  }, [digits]);

  return (
    <Root>
      {digits.map((digit, index) => (
        <Fragment key={index}>
          <Digit isActive={isVisible} digit={Number(digit) as DigitNum} />
          {index < digits.length - 1 && index % 2 === 1 ? (
            <Separator isActive={isVisible} />
          ) : null}
        </Fragment>
      ))}
    </Root>
  );
}

function getDigits() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];
}
