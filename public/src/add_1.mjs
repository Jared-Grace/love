import { add } from "./add.mjs";
import { marker } from "./marker.mjs";
export function add_1(left) {
  marker("1");
  let sum = add(left, 1);
  return sum;
}
