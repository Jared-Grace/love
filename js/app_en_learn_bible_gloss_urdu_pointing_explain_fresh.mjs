import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_explain_meaning_parts } from "./app_en_learn_bible_gloss_urdu_explain_meaning_parts.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is } from "./app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is.mjs";
import { app_en_learn_bible_gloss_urdu_pointing_cores } from "./app_en_learn_bible_gloss_urdu_pointing_cores.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_any } from "./list_any.mjs";
import { app_en_learn_bible_gloss_urdu_explain_sentences } from "./app_en_learn_bible_gloss_urdu_explain_sentences.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is } from "./app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_en_learn_bible_gloss_urdu_pointing_explain_fresh(
  explain,
  source,
) {
  "The explanation that should stand where a pointing one stands now, built from the explanation the same word was given earlier in the same chapter - or nothing, when that earlier one cannot honestly be carried across.";
  "Three reasons to answer with nothing, and each one is a refusal to invent. The earlier explanation may have nothing to lend, being a pointing sentence itself. It may be tied to its own place in the verse, in which case carrying it would put an unchecked claim in the reader's hands. And it may say no more than the pointing sentence already said, in which case the reader gains nothing and only the counting gets quieter, which is the worst of the three because it looks like progress.";
  "What the pointing explanation says after its first sentence is kept and put back at the end. That is where the store writes why the first letter is a capital, and it is true of this place and of no other, so it must survive a sentence arriving from somewhere else.";
  arguments_assert(arguments, 2);
  let borrowed = app_en_learn_bible_gloss_urdu_explain_meaning_parts(source);
  let nothing_to_lend = list_empty_is(borrowed);
  if (nothing_to_lend) {
    return null;
  }
  let stop = "۔";
  let separator = "۔ ";
  let meaning = borrowed.join(separator);
  let bound =
    app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is(meaning);
  if (bound) {
    return null;
  }
  let cores = app_en_learn_bible_gloss_urdu_pointing_cores();
  function core_not_is(part) {
    let known = list_includes(cores, part);
    let said = not(known);
    return said;
  }
  let says_something = list_any(borrowed, core_not_is);
  if (not(says_something)) {
    return null;
  }
  let own = app_en_learn_bible_gloss_urdu_explain_sentences(explain);
  let after_first = own.slice(1);
  function carried_is(sentence) {
    let pointing =
      app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is(sentence);
    let carried = not(pointing);
    return carried;
  }
  let kept = list_filter(after_first, carried_is);
  let parts = borrowed.concat(kept);
  let fresh = parts.join(separator) + stop;
  return fresh;
}
