import { arguments_assert } from "./arguments_assert.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_read } from "./file_read.mjs";
import { markdown_plain_text } from "./markdown_plain_text.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function ebible_letter_plain_text_write() {
  "Writes the letter to eBible out a second time as the plain text an email carries, next to the markdown one it is written in.";
  "A generated twin rather than an edit, so the letter stays a single source. Copying the rendered markdown out of an editor's preview hands over the markdown source instead, and copying it by hand would mean re-doing the removal after every future edit and eventually shipping a stray mark.";
  arguments_assert(arguments, 0);
  let base = "notes/letters/ebible_letter";
  let f_path = text_combine_multiple([base, ".md"]);
  let from_path = repo_path_combine("love", f_path);
  let f_path2 = text_combine_multiple([base, ".txt"]);
  let to_path = repo_path_combine("love", f_path2);
  let letter = await file_read(from_path);
  let plain = markdown_plain_text(letter);
  await file_overwrite(to_path, plain);
  return to_path;
}
