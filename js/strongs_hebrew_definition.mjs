import { equal } from "./equal.mjs";
import { strongs_hebrew_js_path } from "./strongs_hebrew_js_path.mjs";
import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
import { not } from "./not.mjs";
export async function strongs_hebrew_definition(strong_number) {
  if (equal(dictionary, null)) {
    let file_path = strongs_hebrew_js_path();
    let text = await file_read(file_path);
    let start = text.indexOf("{");
    let end = text.lastIndexOf("}");
    let json = text.slice(start, end + 1);
    let dictionary = json_from(json);
  }
  let entry = dictionary["H" + strong_number];
  if (not(entry)) {
    return null;
  }
  return entry;
}
