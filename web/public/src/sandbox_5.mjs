import { path_join } from "./path_join.mjs";
import { marker } from "./marker.mjs";
export function sandbox_5() {
  marker("1");
  let joined = path_join("a", "b");
  return joined;
}
