import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_markdown_path } from "./ebible_letter_markdown_path.mjs";
import { file_read } from "./file_read.mjs";
import { markdown_plain_text } from "./markdown_plain_text.mjs";
export async function ebible_letter_plain_text_generated() {
  arguments_assert(arguments, 0);
  ("the letter to eBible as the plain text an email carries, made fresh from the markdown it is written in.");
  ("The letter has one source and this is the making of the other ending from it. Both the writing of the twin and the gate that proves the twin has not fallen behind ask for it here, so what the gate compares against is by construction the very thing the writer would put on disk - two makings of it could differ, and the one moment that difference shows up is a letter already sent.");
  let from_path = ebible_letter_markdown_path();
  let letter = await file_read(from_path);
  let generated = markdown_plain_text(letter);
  return generated;
}
