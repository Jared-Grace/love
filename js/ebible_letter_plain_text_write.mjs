import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_plain_text_path } from "./ebible_letter_plain_text_path.mjs";
import { ebible_letter_plain_text_generated } from "./ebible_letter_plain_text_generated.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function ebible_letter_plain_text_write() {
  "Writes the letter to eBible out a second time as the plain text an email carries, next to the markdown one it is written in.";
  "A generated twin rather than an edit, so the letter stays a single source. Copying the rendered markdown out of an editor's preview hands over the markdown source instead, and copying it by hand would mean re-doing the removal after every future edit and eventually shipping a stray mark.";
  "The making of the plain text is asked for next door and not done here, so the gate that proves the twin has not fallen behind is comparing against this very text rather than against a second making of it.";
  arguments_assert(arguments, 0);
  let to_path = ebible_letter_plain_text_path();
  let plain = await ebible_letter_plain_text_generated();
  await file_overwrite(to_path, plain);
  return to_path;
}
