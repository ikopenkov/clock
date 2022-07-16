import { WatchDrawer } from "./WatchDrawer";


const image = `

╔╗
╚╝
╔╗
╚╝

`

export function Separator({isActive}: {isActive?: boolean}) {
  return (
    <WatchDrawer
      height={6}
      width={2}
      strImage={isActive ? image : ''}
    />
  );
}
