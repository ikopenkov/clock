import styled from "styled-components";
import { arrowWidth, watchDiameter, watchRadius } from "../constants";
import { Arrow } from "./Arrow";

const Root = styled.div`
  width: ${watchDiameter}px;
  height: ${watchDiameter}px;
  border: 1px solid #ddd;
  border-radius: ${watchRadius}px;
  position: relative;
  display: grid;
  place-items: center;
`;


const MiddleDot = styled.div`
  width: ${arrowWidth}px;
  height: ${arrowWidth}px;
  border-radius: ${arrowWidth}px;
  background-color: #000;
`;


export function Watch({ h, m, isActive }: { h?: number; m?: number, isActive?: boolean }) {
  return (
    <Root>
      <MiddleDot />
      {h != null && <Arrow deg={(360 / 12) * h} isActive={isActive} duration={3000} />}
      {m != null && <Arrow deg={(360 / 60) * m} isActive={isActive} duration={2000} />}
    </Root>
  );
}
