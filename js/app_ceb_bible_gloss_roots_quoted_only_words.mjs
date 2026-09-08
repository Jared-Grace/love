import { gloss_chapters_roots_quoted_only } from "./gloss_chapters_roots_quoted_only.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { gloss_offenders_findings_by_word } from "./gloss_offenders_findings_by_word.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_common } from "./bible_words_common.mjs";
import { gloss_words_rows_names_apart } from "./gloss_words_rows_names_apart.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_roots_quoted_only_words(sample_size) {
  "Every Cebuano word whose explanations pass the root test only because they quote the word itself, named once each with the chapters they were met in, commonest first - with the borrowed names the dictionary only appears to have analysed set aside.";
  "★ THESE SIGHTINGS ARE COUNTED AS SOUND EVERYWHERE ELSE, SO NOTHING ELSE WILL EVER PUT THEM ON A LIST. The word list to write from is built from the sentences the reading calls wrong; a sentence caught here was called right, and draining that list to nothing would leave every one of these standing. That is why this is a reading and not a longer queue - it says how much of the store's good news is arithmetic rather than writing.";
  "The names are set aside the same way the disagreement list sets them aside, and for the same reason: a borrowed name carries a root the dictionary appears to have found and did not, so it would be reported here as a false pass when the truth is that there was nothing to pass.";
  "How many words to show is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  "$plain sample_size";
  "the count says how many rows to print. It names nothing that runs.";
  let held = await gloss_chapters_roots_quoted_only(
    app_ceb_bible_gloss_generate,
  );
  let offenders = property_get(held, "offenders");
  function quoted_is(finding) {
    let only = property_equals(finding, "kind", "quoted");
    return only;
  }
  let carried = ["root", "affixes"];
  let found = gloss_offenders_findings_by_word(offenders, quoted_is, carried);
  let bible_folder = ebible_folder_cebuano();
  let common_words = await bible_words_common(bible_folder);
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
