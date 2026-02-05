import { string_upper_to } from "../../../love/public/src/string_upper_to.mjs";
import { string_first_transform } from "../../../love/public/src/string_first_transform.mjs";
export function string_first_upper_to(s) {
  let transform = string_upper_to;
  let v = string_first_transform(s, transform);
  return v;
}
