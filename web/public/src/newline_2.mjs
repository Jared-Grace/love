import { newline } from "../../../love/public/src/newline.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function newline_2() {
  let r = text_combine(newline(), newline());
  return r;
}
