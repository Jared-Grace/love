import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_roots_silent_words } from "./gloss_offenders_roots_silent_words.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_roots_silent_words(sample_size) {
  "Every Cebuano word whose explanation says nothing about the root binisaya.com takes it back to, named once each with the chapters it was met in, commonest first.";
  "This is the list to write from, and it is the larger of the two piles by a long way. The count of sightings says how many places are wrong and nothing about how much writing there is: one word met once a verse counts as hundreds, and the words are what somebody sits down to.";
  "How many words to show is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  "$plain sample_size";
  "the count says how many rows to print. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let words = gloss_offenders_roots_silent_words(offenders);
  let words_total = list_size(words);
  let count = Number(sample_size);
  let shown = list_take(words, count);
  let r = {
    words_total,
    shown,
  };
  return r;
}
