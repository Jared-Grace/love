import { text_first_transform } from "../../../love/public/src/text_first_transform.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
export function text_first_lower_to(s) {
  let transform = text_lower_to;
  let v = text_first_transform(s, transform);
  return v;
}
