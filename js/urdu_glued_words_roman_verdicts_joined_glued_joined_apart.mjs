import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export function urdu_glued_words_roman_verdicts_joined_glued_joined_apart(
  r2,
  spellings_of,
) {
  arguments_assert(arguments, 2);
  let script_verdicts = property_get(r2, "script_verdicts");
  function choices_of(pieces) {
    let choices = [];
    for (let piece of pieces) {
      let few = spellings_of(piece);
      let unheard = equal(few, null);
      if (unheard) {
        let none = null;
        return none;
      }
      list_add(choices, few);
    }
    return choices;
  }
  function joined_apart(chosen) {
    let phrase = list_join(chosen, " ");
    return phrase;
  }
  let r = {
    script_verdicts,
    choices_of,
    joined_apart,
  };
  return r;
}
