import { newline } from "./newline.mjs";
import { text_combine } from "./text_combine.mjs";
export function newline_2() {
  let r = text_combine(newline(), newline());
  return r;
}
