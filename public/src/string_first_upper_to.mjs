import { string_first_transform } from "../../../love/public/src/string_first_transform.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_first_upper_to(s) {
  marker("1");
  let transform = string_lower_to;
  let v = string_first_transform(s, transform);
  return v;
}
