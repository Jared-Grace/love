import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { location_pathname } from "../../../love/public/src/location_pathname.mjs";
export function location_pathname_part_first_starts_with(path_part) {
  let s = location_pathname();
  let sw = text_starts_with(s, "/" + path_part + "/");
  return sw;
}
