import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function file_json_spaces_rewrite(f_path, spaces) {
  "$plain f_path";
  "$plain spaces";
  "Writes a json file back out at the indentation it is meant to be kept at, leaving what it says untouched.";
  "For a file a person reads and edits by hand that some command has written back at the wrong width. Nothing is wrong with what it holds, so nothing that reads it complains - but every later change to it now shows up as a diff of the whole file, and a peer looking at what changed has to read all of it to find the one line that did.";
  "Reading it as json and writing it again is what makes this safe to run on a file in any state: the answer depends on what the file means rather than on how it happens to be laid out, so running it twice does what running it once did.";
  "The width is read as a number before it is used, and that is the whole of why this line is here. A command line hands its arguments over as words, and a json writer given the word one indents every level with the character 1 rather than with a space - the file it writes then says 1 where it should say nothing, and no longer parses as json at all.";
  arguments_assert(arguments, 2);
  let width = number_from_text(spaces);
  let parsed = await file_read_json(f_path);
  let json = json_format_to_spaces(parsed, width);
  await file_overwrite(f_path, json);
  return f_path;
}
