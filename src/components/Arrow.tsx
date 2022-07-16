import { useCallback, useEffect, useRef, useState } from "react";
import { animated, SpringValue, useSpring } from "react-spring";
import styled from "styled-components";
import { arrowHeight, arrowWidth, watchDiameter } from "../constants";

const SArrow = styled(animated.div)`
  height: ${arrowHeight}px;
  width: ${arrowWidth}px;
  background-color: #000;
  position: absolute;
  left: calc(50% - ${arrowWidth / 2}px);
  top: ${(watchDiameter - arrowHeight) / 2}px;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
`;
export function Arrow({ deg }: { deg: number }) {
  const [style, animate] = useSpring(() => ({ rotateZ: 0, config:{duration: 1000} }));
  useEffect(() => {
    const currentDeg = style.rotateZ.get();
    if (currentDeg > deg) {
      animate({
        rotateZ: deg + 360,
        immediate: false,
        onRest: () => {
          animate({ rotateZ: deg, immediate: true });
        },
      });
    } else {
      animate({ rotateZ: deg, immediate: false });
    }
  }, [animate, deg, style.rotateZ]);

  return (
    <SArrow
      style={style}
    />
  );
}
