import { text_combine_3 } from "../../../love/public/src/text_combine_3.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
export function text_combine_newline(a, b) {
  const combine = newline();
  let r = text_combine_3(a, combine, b);
  return r;
}
