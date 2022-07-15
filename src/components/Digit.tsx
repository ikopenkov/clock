import styled from "styled-components";
import { TimeChar } from "../types";
import { Watch } from "./Watch";

const CharToTime: Record<TimeChar, string> = {
  "═": "9:15",
  "║": "0:30",
  "╔": "3:30",
  "╗": "9:30",
  "╚": "0:15",
  "╝": "0:45",
  " ": "7:35",
};

const digits: Record<number, string> = {
  0: `
╔══╗
║╔╗║
║║║║
║║║║
║╚╝║
╚══╝
`,
  1: `
╔═╗
╚╗║
 ║║
 ║║
╔╝╚╗
╚══╝
`,
  2: `
╔══╗
╚═╗║
╔═╝║
║╔═╝
║╚═╗
╚══╝
`,
  3: `
╔══╗
╚═╗║
╔═╝║
╚═╗║
╔═╝║
╚══╝
`,
  4: `
╔╗╔╗
║║║║
║╚╝║
╚═╗║
  ║║
  ╚╝
`,
  5: `
╔══╗
║╔═╝
║╚═╗
╚═╗║
╔═╝║
╚══╝
`,
  6: `
╔══╗
║╔═╝
║╚═╗
║╔╗║
║╚╝║
╚══╝
`,
  7: `
╔══╗
╚═╗║
  ║║
  ║║
  ║║
  ╚╝  
`,
  8: `
╔══╗
║╔╗║
║╚╝║
║╔╗║
║╚╝║
╚══╝
`,
  9: `
╔══╗
║╔╗║
║╚╝║
╚═╗║
╔═╝║
╚══╝
`,
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-template-rows: repeat(6, min-content);
`;

export function Digit({ digit }: { digit: number }) {
  const strImage = digits[digit];
  const matrix = strImage
    .split("\n")
    .slice(1, -1)
    .map((row) =>
      row
        .padEnd(4, " ")
        .slice(0, 4)
        .split("")
        .map((char) => CharToTime[char as TimeChar].split(":").map(Number))
    );
  return (
    <Root>
      {matrix.map((row, rowIdx) => row.map(([h, m], colIdx) => <Watch h={h} m={m} key={`${rowIdx} ${colIdx}`} />))}
    </Root>
  );
}
