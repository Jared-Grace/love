import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_markdown_path } from "./ebible_letter_markdown_path.mjs";
import { ebible_letter_plain_text_path } from "./ebible_letter_plain_text_path.mjs";
import { file_read } from "./file_read.mjs";
import { markdown_plain_text } from "./markdown_plain_text.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function ebible_letter_plain_text_write() {
  "Writes the letter to eBible out a second time as the plain text an email carries, next to the markdown one it is written in.";
  "A generated twin rather than an edit, so the letter stays a single source. Copying the rendered markdown out of an editor's preview hands over the markdown source instead, and copying it by hand would mean re-doing the removal after every future edit and eventually shipping a stray mark.";
  arguments_assert(arguments, 0);
  let from_path = ebible_letter_markdown_path();
  let to_path = ebible_letter_plain_text_path();
  let letter = await file_read(from_path);
  let plain = markdown_plain_text(letter);
  await file_overwrite(to_path, plain);
  return to_path;
}
