import { equal } from "./equal.mjs";
import { strongs_greek_json_path } from "./strongs_greek_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
export async function strongs_greek_definition(strong_number) {
  if (equal(dictionary, null)) {
    let file_path = strongs_greek_json_path();
    let dictionary = await file_read_json(file_path);
  }
  let entry = property_get_or_null(dictionary, "G" + strong_number);
  if (not(entry)) {
    return null;
  }
  return entry;
}
