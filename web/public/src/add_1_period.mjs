import { add_1 } from "../../../love/public/src/add_1.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function add_1_period(index) {
  let r2 = text_combine(add_1(index), ".");
  return r2;
}
