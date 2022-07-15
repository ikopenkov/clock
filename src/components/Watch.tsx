import styled from "styled-components";

const r = 15;
const d = r * 2;
const Root = styled.div`
  width: ${d}px;
  height: ${d}px;
  border: 1px solid #ddd;
  border-radius: ${r}px;
  position: relative;
  display: grid;
  place-items: center;
`;

const arrowHeight = r / 10;

const MiddleDot = styled.div`
  width: ${arrowHeight}px;
  height: ${arrowHeight}px;
  border-radius: ${arrowHeight}px;
  background-color: #000;
`;

const SArrow = styled.div`
  height: ${d}px;
  width: ${arrowHeight}px;
  background-color: #000;
  position: absolute;
  left: calc(50% - ${arrowHeight / 2}px);
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  transition: transform 1s ease-in-out;
`;

function Arrow({ deg }: { deg: number }) {
  return (
    <SArrow
      style={{
        transform: `rotate(${deg}deg)`,
      }}
    />
  );
}

export function Watch({h,m}: {h: number, m: number}) {
  return (
    <Root>
      <MiddleDot />
      <Arrow deg={(360/12)*h} />
      <Arrow deg={(360/60)*m} />
    </Root>
  );
}
