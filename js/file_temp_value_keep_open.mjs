import { value_file_contents_extension } from "./value_file_contents_extension.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_temp_keep } from "./file_temp_keep.mjs";
import { file_open } from "./file_open.mjs";
export async function file_temp_value_keep_open(value) {
  "One value written to a temp file of its own and put in front of the human, and the path it was written to.";
  "The file is KEPT, so it is still there to be read again, and it is on somebody to clear it later.";
  ("Its twin ",
    fn_name("file_temp_value_open"),
    " deletes it the moment the editor has it, which is the one to reach for: the editor holds the contents in a buffer of its own from then on, so the human keeps the window and the temp folder keeps nothing.");
  ("What a value becomes as a file is not decided here - ",
    fn_name("value_file_contents_extension"),
    " is asked, so every fn that writes a value out writes it the same way.");
  let shape = value_file_contents_extension(value);
  let contents = property_get(shape, "contents");
  let extension = property_get(shape, "extension");
  let kept = await file_temp_keep();
  let temp_path = text_combine(kept, extension);
  await file_overwrite(temp_path, contents);
  await file_open(temp_path);
  return temp_path;
}
