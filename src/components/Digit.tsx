import { DigitNum } from "../types";
import { WatchDrawer } from "./WatchDrawer";

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

export function Digit({
  digit,
}: {
  digit: DigitNum;
}) {
  return (
    <WatchDrawer
      height={6}
      width={4}
      strImage={digits[digit]}
    />
  );
}
