import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_any } from "./list_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is(
  sentence,
) {
  "Says whether one sentence of an Urdu explanation opens by pointing at a word that came earlier rather than saying anything itself.";
  "The store spells the pointing word two ways, with and without the mark over the first letter, and both are in use, so both are asked about. Only the opening is read: a sentence that mentions the earlier word part way through is saying something of its own around it.";
  arguments_assert(arguments, 1);
  let openers = ["وُہی", "وہی"];
  function opens_with(opener) {
    let found = text_starts_with(sentence, opener);
    return found;
  }
  let pointing = list_any(openers, opens_with);
  return pointing;
}
