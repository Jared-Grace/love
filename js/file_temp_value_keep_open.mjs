import { fn_name } from "./fn_name.mjs";
import { text_is } from "./text_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_temp_keep } from "./file_temp_keep.mjs";
import { file_open } from "./file_open.mjs";
export async function file_temp_value_keep_open(value) {
  "One value written to a temp file of its own and put in front of the human, and the path it was written to.";
  "Text is written as itself. Anything else is written as formatted JSON, because that is the only shape a file can hold it in.";
  "The file is KEPT, so it is still there to be read again, and it is on somebody to clear it later.";
  ("Its twin ",
    fn_name("file_temp_value_open"),
    " deletes it the moment the editor has it, which is the one to reach for: the editor holds the contents in a buffer of its own from then on, so the human keeps the window and the temp folder keeps nothing.");
  ("A file with no extension opens as a file of no kind, so the extension says which of the two shapes was written.");
  let is_text = text_is(value);
  let contents = null;
  let extension = null;
  if (is_text) {
    contents = value;
    extension = ".txt";
  } else {
    contents = json_format_to(value);
    extension = ".json";
  }
  let kept = await file_temp_keep();
  let temp_path = text_combine(kept, extension);
  await file_overwrite(temp_path, contents);
  await file_open(temp_path);
  return temp_path;
}
