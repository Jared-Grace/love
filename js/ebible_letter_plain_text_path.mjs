import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_base_path } from "./ebible_letter_base_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_letter_plain_text_path() {
  "The letter to eBible as the plain text an email carries - generated from the markdown one, and the thing to paste.";
  "Never edited by hand. Anything written here is lost the next time the letter is generated, and a gate says so out loud rather than letting the two drift apart quietly.";
  arguments_assert(arguments, 0);
  let base = ebible_letter_base_path();
  let path = text_combine_multiple([base, ".txt"]);
  return path;
}
