import { text_combine_ } from "../../../love/public/src/text_combine_3.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
export function text_between_newline(a, b) {
  const combine = newline();
  let r = text_combine_(a, combine, b);
  return r;
}
