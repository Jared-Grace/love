import { text_is } from "./text_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_temp_keep } from "./file_temp_keep.mjs";
import { file_open } from "./file_open.mjs";
export async function file_temp_value_open(value) {
  "One value written to a temp file of its own and put in front of the human, and the path it was written to.";
  "Text is written as itself. Anything else is written as formatted JSON, because that is the only shape a file can hold it in.";
  "The file is KEPT. Its twin wrote the same file inside a scope that deletes on the way out, so the editor was handed a path that no longer existed by the time it read it - the command exited saying nothing and no window ever appeared.";
  "A file with no extension opens as a file of no kind, so the extension says which of the two shapes was written.";
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
