import { text_to } from "./text_to.mjs";
import { text_size } from "./text_size.mjs";
export function text_size_text_to(s) {
  let size = text_size(s);
  let t = text_to(size);
  return t;
}
