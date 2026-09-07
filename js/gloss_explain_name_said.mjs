import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { each } from "./each.mjs";
import { text_take } from "./text_take.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { not } from "./not.mjs";
export function gloss_explain_name_said(explain, word) {
  "Whether a gloss explanation says in so many words that the word it is explaining is somebody's or somewhere's name.";
  "The dictionary hands back a root for anything at all, and for a borrowed name it hands back whatever Cebuano word the letters happen to resemble - Moises to isi, Galilea to lili, Gideon to dili, which means not. Every one of those is recorded as an explanation disagreeing with the dictionary, and in every one of them the explanation was right. What separates them from a real disagreement is the explanation saying the word is a name, so that is what is read.";
  "The word being explained has to be the one the phrase is about. An explanation of ginganlan says 'Ngalan is a name', which is true of ngalan and says nothing about ginganlan, and reading it as a declaration would take a real Cebuano word out of the queue on the strength of a sentence about a different one. So a quoted word standing before the phrase has to be the word itself, and a phrase with somebody else's word in front of it is refused.";
  "This is a lower bound and not a test. Measured on the findings gathered on 2026-09-07, it reads eighty three sightings as declared, while the words that are capitalised every time they appear - almost all of them names of people and places - account for five hundred and eight. The wordings it misses say the same thing without the word name in them: 'Efeso' is Ephesus, a large port city. So a true answer here is proof and a false one is not evidence of anything, and nothing downstream may read a false as a denial.";
  "$plain explain";
  "$plain word";
  "the first names an explanation to read, the second the word it explains. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let lower = text_lower_to(explain);
  let phrases = [
    "is the name",
    "is a name",
    "the name of",
    "proper noun",
    "proper name",
    "personal name",
  ];
  let missing = -1;
  let at = missing;
  function phrase_read(phrase) {
    let index = text_index_of_try(lower, phrase);
    let found = greater_than(index, missing);
    if (found) {
      let unset = equal(at, missing);
      let earlier = less_than(index, at);
      if (unset || earlier) {
        at = index;
      }
    }
  }
  each(phrases, phrase_read);
  let unsaid = equal(at, missing);
  if (unsaid) {
    return false;
  }
  let before = text_take(explain, at);
  let quotes = new RegExp("[‘'\"]([^’'\"]+)[’'\"]", "g");
  let quoted = text_regex_first_groups(before, quotes);
  let wanted = gloss_word_folded(word);
  let others = false;
  function quoted_read(one) {
    let key = gloss_word_folded(one);
    let mine = equal(key, wanted);
    if (not(mine)) {
      others = true;
    }
  }
  each(quoted, quoted_read);
  let r = not(others);
  return r;
}
