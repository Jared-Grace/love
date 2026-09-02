import { property_get } from "./property_get.mjs";
import { urdu_glued_words_roman_verdicts_joined_glued_spellings_of } from "./urdu_glued_words_roman_verdicts_joined_glued_spellings_of.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu_control_roman } from "./ebible_folder_urdu_control_roman.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export async function urdu_glued_words_roman_verdicts_joined_glued() {
  arguments_assert(arguments, 0);
  let control = ebible_folder_urdu_control_roman();
  let r2 =
    await urdu_glued_words_roman_verdicts_joined_glued_spellings_of(control);
  let spellings_of = property_get(r2, "spellings_of");
  let occurrences = property_get(r2, "occurrences");
  let split = property_get(r2, "split");
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
  function joined_glued(chosen) {
    let phrase = list_join(chosen, "");
    return phrase;
  }
  let r = {
    control,
    script_verdicts,
    split,
    occurrences,
    spellings_of,
    choices_of,
    joined_apart,
    joined_glued,
  };
  return r;
}
