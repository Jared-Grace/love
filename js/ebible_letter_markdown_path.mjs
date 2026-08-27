import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_base_path } from "./ebible_letter_base_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_letter_markdown_path() {
  "The letter to eBible as it is written - the one source, and the only one of the two that is edited by hand.";
  arguments_assert(arguments, 0);
  let base = ebible_letter_base_path();
  let path = text_combine_multiple([base, ".md"]);
  return path;
}
