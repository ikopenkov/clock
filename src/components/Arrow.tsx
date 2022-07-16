import { useCallback, useEffect } from "react";
import { animated, useSpring } from "react-spring";
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
const defaultDuration = 2000;
export function Arrow({
  deg,
  isActive,
  duration = defaultDuration,
}: {
  deg: number;
  isActive?: boolean;
  duration?: number;
}) {
  const [style, animate] = useSpring(() => ({
    rotateZ: 0,
    config: { duration: duration },
  }));
  const rotate = useCallback(() => {
    const currentDeg = style.rotateZ.get();
    if (deg <= currentDeg) {
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

  useEffect(() => {
    rotate();
  }, [rotate, isActive]);

  return <SArrow style={style} />;
}
