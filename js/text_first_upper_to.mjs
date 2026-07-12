import { text_upper_to } from "./text_upper_to.mjs";
import { text_first_transform } from "./text_first_transform.mjs";
export function text_first_upper_to(s) {
  let transform = text_upper_to;
  let t = text_first_transform(s, transform);
  return t;
}
