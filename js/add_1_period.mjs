import { add_1 } from "./add_1.mjs";
import { text_combine } from "./text_combine.mjs";
export function add_1_period(index) {
  let r = text_combine(add_1(index), ".");
  return r;
}
