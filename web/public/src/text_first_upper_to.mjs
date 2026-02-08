import { string_upper_to } from "../../../love/public/src/string_upper_to.mjs";
import { text_first_transform } from "../../../love/public/src/text_first_transform.mjs";
export function text_first_upper_to(s) {
  let transform = string_upper_to;
  let v = text_first_transform(s, transform);
  return v;
}
