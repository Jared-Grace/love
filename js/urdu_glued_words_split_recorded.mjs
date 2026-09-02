import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function urdu_glued_words_split_recorded(text) {
  "One piece of writing with the missing spaces put back into it, handed back together with a record of every word that was changed to do it.";
  "The record is taken at the moment of the change and cannot be taken anywhere else. Only the replacement itself knows that this particular run of letters was one of the decided words rather than a spelling that was already right, and one line later the finished text no longer says: a space put back reads exactly like a space that was always there, so a reader handed the repaired text alone can only guess, and guessing here marks words nobody touched.";
  "That is the whole reason for this twin. Anything that wants to show a reader what the publisher wrote, or to count what a passage cost, or to check a ruling against the place it landed, needs to know which occurrences moved. Inverting the ruling table to find out is the wrong answer, because the spaced spelling occurs honestly in the text as well.";
  "One entry per occurrence, in the order they were met, each carrying the word as it was published and the word as it now reads. A word changed twice in one verse is two entries, because a count of what happened to a passage is one of the things this is for.";
  "The ruling table is asked only for the names it was written with. A record in this language answers to a handful of names nobody put in it — the name of the thing that made it, and the names of the few questions every record can answer — and reading one of those back gets a live answer rather than nothing. Reaching the table with the plain bracket does exactly that, so a passage carrying the English word constructor or valueOf came back with a piece of machinery spelled out in place of the word. The words matched here are letters in any alphabet, so that is not a far-fetched input: it is what happens the first time this is pointed at a line of English.";
  "It is therefore safe to run over writing in any language, which is the claim the plain twin already made and could not keep.";
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  let words = new RegExp("[\\p{L}\\p{M}]+", "gu");
  let rewrites = [];
  function lambda(word) {
    let spaced = property_or_null(split, word);
    let undecided = null_is(spaced);
    if (undecided) {
      return word;
    }
    let rewrite = {
      word,
      spaced,
    };
    list_add(rewrites, rewrite);
    return spaced;
  }
  let repaired = text.replace(words, lambda);
  let r = {
    repaired,
    rewrites,
  };
  return r;
}
