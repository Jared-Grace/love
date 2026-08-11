import { file_name_js } from "./file_name_js.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_dot } from "./text_dot.mjs";
export function file_name_app_chunk(chunk_id, app_name) {
  "$plain chunk_id";
  "$plain app_name";
  "What one of an app's extra scripts is called, given the number the build gave it and the app it was cut out of.";
  "This says the same thing its neighbour recognises, from the other side: that one is handed a name and asks whether it has this shape, and this one is handed the parts and makes the name. Both spell the shape, so they are kept beside each other, and a change to one is a change the other has to be read against.";
  let dot = text_dot();
  let tail = file_name_js(app_name);
  let file_name = text_combine_multiple([chunk_id, dot, tail]);
  return file_name;
}
