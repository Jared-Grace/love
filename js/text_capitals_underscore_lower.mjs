import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function text_capitals_underscore_lower(text) {
  arguments_assert(arguments, 1);
  ("The same words written the way this repo writes them: every capital letter becomes an underscore and the small letter it was, so a word run together with capitals marking where the parts start comes apart into parts with underscores between them.");
  ("Code written elsewhere arrives spelled this way, and the spelling is the only thing standing between it and a name here. Turning it over is a rule rather than a reading, so nobody has to be asked what the parts were - the capitals already said.");
  ("Nothing is refused here and nothing is judged. Text with no capital in it comes back unchanged, and text whose capitals stand next to each other comes back with an underscore before each one, which is a poor name but an honest turning of what it was given. Whether the answer is a name worth having is a separate question, asked by whoever wants a name.");
  let characters = text_split_empty(text);
  let pieces = [];
  function character_add(character) {
    let small_is = text_lower_is(character);
    if (small_is) {
      list_add(pieces, character);
      return;
    }
    let lowered = text_lower_to(character);
    let piece = text_combine_3("_", lowered, "");
    list_add(pieces, piece);
  }
  each(characters, character_add);
  let joined = list_join_empty(pieces);
  return joined;
}
