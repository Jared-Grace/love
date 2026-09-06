import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_roots_silent_words } from "./gloss_offenders_roots_silent_words.mjs";
import { app_ceb_bible_gloss_words_distinct } from "./app_ceb_bible_gloss_words_distinct.mjs";
import { gloss_words_rows_names_apart } from "./gloss_words_rows_names_apart.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_roots_silent_words(sample_size) {
  "Every Cebuano word whose explanation says nothing about the root binisaya.com takes it back to, named once each with the chapters it was met in, commonest first - with the borrowed names the dictionary only appears to have analysed set aside.";
  "This is the list to write from, and it is the larger of the two piles by a long way. The count of sightings says how many places are wrong and nothing about how much writing there is: one word met once a verse counts as hundreds, and the words are what somebody sits down to.";
  "The names are set aside rather than dropped in silence, and printed whole rather than counted, because this filter takes work off a person's list and the only way to trust it is to read what it took.";
  "How many words to show is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  "$plain sample_size";
  "the count says how many rows to print. It names nothing that runs.";
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let found = gloss_offenders_roots_silent_words(offenders);
  let spelled = await app_ceb_bible_gloss_words_distinct();
  let apart = gloss_words_rows_names_apart(found, spelled);
  let words = property_get(apart, "words");
  let names = property_get(apart, "names");
  function row_word(row) {
    let word = property_get(row, "word");
    return word;
  }
  let taken_out = list_map(names, row_word);
  let words_total = list_size(words);
  let count = Number(sample_size);
  let shown = list_take(words, count);
  let r = {
    words_total,
    taken_out,
    shown,
  };
  return r;
}
