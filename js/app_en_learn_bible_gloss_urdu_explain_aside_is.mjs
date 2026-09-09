import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_any } from "./list_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_aside_is(sentence) {
  "Says whether one sentence of an Urdu explanation is an aside about this one place in the verse rather than about the word.";
  "Two asides are written across the whole store. One says why the first letter is a capital - because a verse begins, or a sentence, or a quotation, or because the word stands for the LORD. The other says that Urdu did not write the word separately at all. Both are true of the place and not of the word, so a sentence carried from one place to another must leave them behind and the place it lands in must supply its own.";
  arguments_assert(arguments, 1);
  let openers = ["پہلا حرف بڑا", "اُردُو نے یہ لفظ"];
  function opens_with(opener) {
    let found = text_starts_with(sentence, opener);
    return found;
  }
  let aside = list_any(openers, opens_with);
  return aside;
}
