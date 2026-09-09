import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_back_reference_wordings } from "./gloss_back_reference_wordings.mjs";
import { app_en_learn_bible_gloss_urdu_explain_sentences } from "./app_en_learn_bible_gloss_urdu_explain_sentences.mjs";
import { text_split } from "./text_split.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_en_learn_bible_gloss_urdu_pointing_cores() {
  "What each known pointing wording would say if it were not pointing anywhere - the sentence with its pointing word struck off the front.";
  "It exists so that a repair can tell when it is about to put an empty sentence in place of an empty sentence. 'The same article.' is already known to say nothing; strike the pointing word off and 'article.' is left, and a place whose earlier explanation says only that is no better off for having it copied in. The list of empty sentences is therefore not written out a second time by hand - it is read off the pointing wordings the store already names, so the two can never disagree.";
  "Only the opening sentence of a wording is used. Where a wording carries a second sentence it is an aside about that one place, which no other place may borrow anyway.";
  arguments_assert(arguments, 0);
  let wordings = gloss_back_reference_wordings();
  function core_of(wording) {
    let sentences = app_en_learn_bible_gloss_urdu_explain_sentences(wording);
    let first = sentences[0];
    let words = text_split(first, " ");
    let rest = words.slice(1);
    let core = rest.join(" ");
    return core;
  }
  let cores = list_map(wordings, core_of);
  let unique = list_unique(cores);
  return unique;
}
