import { useCallback, useState } from "react";

export function useForceRerender() {
  const [state, updateState] = useState<any>();
  return [useCallback(() => updateState({}), []), state];
}
