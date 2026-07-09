import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { location_pathname } from "../../../love/public/src/location_pathname.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function location_pathname_part_first_starts_with(path_part) {
  let s = location_pathname();
  let sw = text_starts_with(s, text_combine_multiple(["/", path_part, "/"]));
  return sw;
}
