import { add } from "./add.mjs";
import { marker } from "./marker.mjs";
export function add_1(left, right) {
  marker("1");
  let sum = add(left, right);
  return sum;
}
