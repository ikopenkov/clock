import styled from "styled-components";
import { TimeChar } from "../types";
import { Watch } from "./Watch";

const Root = styled.div<{ width: number; height: number }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.width}, min-content);
  grid-template-rows: repeat(${(p) => p.height}, min-content);
`;

const CharToTime: Record<TimeChar, [number, number]> = {
  "═": [9, 15],
  "║": [0, 30],
  "╔": [3, 30],
  "╗": [9, 30],
  "╚": [0, 15],
  "╝": [0, 45],
  " ": [7, 35],
};

export function WatchDrawer({
  width,
  height,
  strImage,
  charToTime = CharToTime,
}: {
  width: number;
  height: number;
  strImage: string;
  charToTime?: Record<string, [number, number]>;
}) {
  const rows = strImage.split("\n").slice(1, -1);
  while (rows.length < height) {
    rows.push("");
  }

  const matrix = rows.map((row) =>
    row
      .padEnd(width, " ")
      .slice(0, width)
      .split("")
      .map((char) => charToTime[char])
  );
  return (
    <Root width={width} height={height}>
      {matrix.map((row, rowIdx) =>
        row.map(([h, m], colIdx) => (
          <Watch h={h} m={m} key={`${rowIdx} ${colIdx}`} />
        ))
      )}
    </Root>
  );
}
