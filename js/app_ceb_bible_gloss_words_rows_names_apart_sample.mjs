import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_rows_names_apart } from "./app_ceb_bible_gloss_words_rows_names_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_words_rows_names_apart_sample(
  rows,
  sample_size,
) {
  "$plain rows";
  "$plain sample_size";
  "One list of Cebuano word rows cut against the whole Cebuano bible and then handed back as a page to read: how many words are left once the borrowed names are set aside, every name that was set aside spelled out, and the first few words of what remains.";
  ("The cutting is ",
    fn_name("app_ceb_bible_gloss_words_rows_names_apart"),
    ", and this is the shape two readings put around it. Both end the same ten lines, and a reading that ends differently should not be brought here - what is shared is the page, not the cut, and the cut is already its own unit for anybody wanting only that.");
  ("★ THE NAMES ARE PRINTED WHOLE RATHER THAN COUNTED, AND THAT IS THE POINT OF HANDING THEM BACK AT ALL. A filter that takes work off a person's list can only be trusted by reading what it took, so a count here would leave the reader with nothing to check and no way to find a word that was set aside wrongly.");
  ("Only the words are cut down to the sample and the names never are, because the sample is there to keep a command line readable while the names are the part somebody is meant to read all of.");
  ("How many words to show is read through Number, so the count is said as text as readily as as a number. That is what lets this be reached for from the command line, where every argument arrives as text and a count read straight would take none of them.");
  ("Nothing is written. The bible underneath is walked afresh on every ask, so this is not free and belongs at the top of a reading rather than inside a walk.");
  arguments_assert(arguments, 2);
  let apart = await app_ceb_bible_gloss_words_rows_names_apart(rows);
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
