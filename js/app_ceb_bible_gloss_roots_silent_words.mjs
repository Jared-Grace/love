import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_roots_silent_words } from "./gloss_offenders_roots_silent_words.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { gloss_words_rows_names_apart } from "./gloss_words_rows_names_apart.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_roots_silent_words(sample_size) {
  "Every Cebuano word whose explanation says nothing about the root binisaya.com takes it back to, named once each with the chapters it was met in, commonest first - with the borrowed names the dictionary only appears to have analysed set aside.";
  "This is one of the two lists to write from, and measured on 2026-09-06 it is the smaller of them: 253 words stand here against 424 naming a root the dictionary does not give. It is dated rather than left standing as a fact, because the store is authored continually and both piles move; it was written down as the larger, and may well have been when that was written. The count of sightings says how many places are wrong and nothing about how much writing there is: one word met once a verse counts as hundreds, and the words are what somebody sits down to.";
  "★ THE VOCABULARY THE NAME TEST IS GIVEN IS THE WHOLE CEBUANO BIBLE, NOT THE CHAPTERS THAT HAVE BEEN GLOSSED SO FAR, AND THAT IS THE ONLY THING MAKING THE TEST TRUSTWORTHY. A word is called a name when its small-letter spelling appears nowhere, so every book that has not been read yet is a chance for an ordinary word to clear itself, and handing over the glossed chapters alone would file the language's own words as names.";
  "The names are set aside rather than dropped in silence, and printed whole rather than counted, because this filter takes work off a person's list and the only way to trust it is to read what it took.";
  "How many words to show is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  "$plain sample_size";
  "the count says how many rows to print. It names nothing that runs.";
  "Measured on 2026-09-07, 205 of the 253 words in this queue were given a written explanation naming the dictionary root, spread over the handover as 8874 sightings in 447 of the 449 chapters. The 48 left are not unfinished writing; they are a different fault, and worth naming here because a later reader will otherwise take them for a remainder to be worked through. In every one of the 48 the root the dictionary gives is not in the word at all, so no honest sentence can be written that names it - denaryo taken back to diriyot, komino to kino, platero to plato, kaninya to sinya. Ten of the 48 are words Cebuano borrowed or names it carried over, where a Cebuano root does not exist to be found; the other thirty-eight are ordinary Cebuano words whose lookup simply landed on the wrong entry. Two of those thirty-eight are the sharpest: pag and mag are bare affixes rather than words, and they have been handed to the dictionary as though they were words and given the roots pala and mala. The remedy for this residue is in the root lookup, not in the writing.";
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let found = gloss_offenders_roots_silent_words(offenders);
  let bible_folder = ebible_folder_cebuano();
  let bible_apart = await bible_words_names_apart(bible_folder);
  let common_words = property_get(bible_apart, "common");
  let apart = gloss_words_rows_names_apart(found, common_words);
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
