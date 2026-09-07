import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { gloss_explain_roots_built_named } from "./gloss_explain_roots_built_named.mjs";
import { gloss_root_named_word_spelled_in_is } from "./gloss_root_named_word_spelled_in_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { set_includes } from "./set_includes.mjs";
import { gloss_explain_roots_self_named } from "./gloss_explain_roots_self_named.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_explain_roots_from_named } from "./gloss_explain_roots_from_named.mjs";
export function gloss_explain_roots_named_word_given(word, explain, known) {
  "Every root a gloss explanation names, read the same four ways as the reader that is handed the sentence alone, except that the one ambiguous wording must also either spell its answer inside the word or name something a vocabulary has met.";
  "★ THIS EXISTS BECAUSE THE READER BESIDE IT CANNOT ASK THE ONE QUESTION THAT SETTLES ITS ONLY WRONG ANSWER, AND THE MISSING THING IS THE WORD. Given a sentence alone there is no telling Akong is ako, which names a root, from Kaniya is him, which gives an English meaning - the two are the same shape and the same punctuation. Given the word as well the first says the answer is spelled inside it and the second does not, and that is not a guess about the language but the thing the sentence itself claims when it says two words are the same word.";
  "The other three wordings are handed back untouched and nothing about them is second guessed here. Built on and from say where a word came from, which is the one place a sound shift is expected, so a root that is not spelled inside its word is ordinary there rather than suspect - applying this test to them would refuse katawhan from tawo and gipamatud-an from matuod, which are right. The strict wording wrote the word root outright, so it said what it meant.";
  "The vocabulary is a second chance and not a second test, so it can only keep an answer spelling refused and can never throw one out. A real root whose spelling shifted past folding - dala under dad-on, dumdom under nahinumdom - is met in the Cebuano bible or in the gathered dictionary and is kept by that; an English meaning is met in neither. It is asked second because it is the weaker of the two, being a fact about a word list rather than about the sentence.";
  "Handing an empty vocabulary is meaningful rather than broken. It gives the reading spelling alone would give, so the two ways of doing this are one function asked with different second chances rather than two functions to keep in step. That is deliberate: the choice between them is which set to pass, not which function to call.";
  "A wording whose every answer is refused is passed over and the wordings after it are still asked, which is the rule the reader beside this one already follows. A sentence that names a meaning in the ambiguous wording and a real root in a later one should come back with the real root rather than with nothing.";
  "$plain word";
  "it names the word being explained, never anything that runs.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  "$plain known";
  "it is a set of words some vocabulary has met, read only for membership.";
  arguments_assert(arguments, 3);
  let claimed = gloss_explain_roots_claimed(explain);
  let claimed_count = list_size(claimed);
  let claimed_empty = equal(claimed_count, 0);
  if (not(claimed_empty)) {
    return claimed;
  }
  let built = gloss_explain_roots_built_named(explain);
  let built_count = list_size(built);
  let built_empty = equal(built_count, 0);
  if (not(built_empty)) {
    return built;
  }
  function root_kept_is(root) {
    let spelled = gloss_root_named_word_spelled_in_is(word, root);
    if (spelled) {
      return true;
    }
    let lowered = text_lower_to(root);
    let met = set_includes(known, lowered);
    return met;
  }
  let self_named = gloss_explain_roots_self_named(explain);
  let self_kept = list_filter(self_named, root_kept_is);
  let self_count = list_size(self_kept);
  let self_empty = equal(self_count, 0);
  if (not(self_empty)) {
    return self_kept;
  }
  let from_named = gloss_explain_roots_from_named(explain);
  return from_named;
}
