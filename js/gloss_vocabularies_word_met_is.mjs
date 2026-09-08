import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { set_includes } from "./set_includes.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function gloss_vocabularies_word_met_is(vocabularies, word) {
  "$plain vocabularies";
  "$plain word";
  "Whether one spelling is met in either of the two vocabularies - written somewhere in the bible, or carrying an entry in the dictionary. Met in neither is what every reading over these means by foreign.";
  ("The pair comes from ",
    fn_name("app_ceb_bible_gloss_vocabularies"),
    ", and this is the only place the two halves are put to a word, so the halves never have to be pulled out at a reading. Three readings asked this question and wrote it out three times, and one of the three wrote it in the opposite shape - two early returns rather than one or - which is the same question and does not read like it.");
  ("The bible is asked first and the dictionary only when the bible has not answered, which is the order the readings already had and is worth keeping: the first is a membership test against a set already in hand and the second is a lookup, so a word the bible writes costs nothing further.");
  ("★ THE SPELLING HANDED IN HAS TO BE IN SMALL LETTERS ALREADY AND NOTHING HERE CAN CHECK IT. Both halves hold small letters only, so a word carrying a capital is answered no by both of them, quietly and every time - and no would then be read as foreign, which is the strongest thing any of these readings says about a word. Every caller lowers the spelling before asking.");
  ("It answers about the spelling and never about the word: a root that is genuinely bound, rare, and never looked up is met in neither vocabulary while being perfectly sound. So a no is a class to read rather than a fault, and the readings underneath say so in their own prose because it is their answer to report, not this one's.");
  arguments_assert(arguments, 2);
  let written_words = property_get(vocabularies, "written");
  let written = set_includes(written_words, word);
  if (written) {
    return true;
  }
  let known = property_get(vocabularies, "known");
  let held = binisaya_words_known_get(known, word);
  let missing = null_is(held);
  let looked_up = not(missing);
  return looked_up;
}
