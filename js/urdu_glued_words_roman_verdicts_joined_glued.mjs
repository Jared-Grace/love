import { property_get } from "./property_get.mjs";
import { urdu_glued_words_roman_verdicts_joined_glued_joined_glued } from "./urdu_glued_words_roman_verdicts_joined_glued_joined_glued.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu_control_roman } from "./ebible_folder_urdu_control_roman.mjs";
export async function urdu_glued_words_roman_verdicts_joined_glued() {
  arguments_assert(arguments, 0);
  let control = ebible_folder_urdu_control_roman();
  let r2 =
    await urdu_glued_words_roman_verdicts_joined_glued_joined_glued(control);
  let joined_glued = property_get(r2, "joined_glued");
  let script_verdicts = property_get(r2, "script_verdicts");
  let choices_of = property_get(r2, "choices_of");
  let joined_apart = property_get(r2, "joined_apart");
  let split = property_get(r2, "split");
  let occurrences = property_get(r2, "occurrences");
  let spellings_of = property_get(r2, "spellings_of");
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
