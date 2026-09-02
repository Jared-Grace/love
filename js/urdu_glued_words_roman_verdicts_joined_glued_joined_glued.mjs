import { arguments_assert } from "./arguments_assert.mjs";
import { urdu_glued_words_roman_verdicts_joined_glued_spellings_of } from "./urdu_glued_words_roman_verdicts_joined_glued_spellings_of.mjs";
import { property_get } from "./property_get.mjs";
import { urdu_glued_words_roman_verdicts_joined_glued_joined_apart } from "./urdu_glued_words_roman_verdicts_joined_glued_joined_apart.mjs";
import { list_join } from "./list_join.mjs";
export async function urdu_glued_words_roman_verdicts_joined_glued_joined_glued(
  control,
) {
  arguments_assert(arguments, 1);
  let r2 =
    await urdu_glued_words_roman_verdicts_joined_glued_spellings_of(control);
  let spellings_of = property_get(r2, "spellings_of");
  let occurrences = property_get(r2, "occurrences");
  let split = property_get(r2, "split");
  let r3 = urdu_glued_words_roman_verdicts_joined_glued_joined_apart(
    r2,
    spellings_of,
  );
  let joined_apart = property_get(r3, "joined_apart");
  let choices_of = property_get(r3, "choices_of");
  let script_verdicts = property_get(r3, "script_verdicts");
  function joined_glued(chosen) {
    let phrase = list_join(chosen, "");
    return phrase;
  }
  let r = {
    spellings_of,
    occurrences,
    split,
    joined_apart,
    choices_of,
    script_verdicts,
    joined_glued,
  };
  return r;
}
