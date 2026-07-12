import { text_combine_3 } from "./text_combine_3.mjs";
import { newline } from "./newline.mjs";
export function text_between_newline(a, b) {
  let combine = newline();
  let r = text_combine_3(a, combine, b);
  return r;
}
