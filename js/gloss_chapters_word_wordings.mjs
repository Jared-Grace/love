import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_chapter_entries } from "./gloss_chapter_entries.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { object_values } from "./object_values.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_word_wordings(fn, word) {
  "Every distinct sentence one gloss store has written under a single English word, commonest first, each beside how many entries carry it, which chapters they sit in, and which spellings of the word were given it.";
  "$plain word";
  "the word is one English word as it appears in the text, like that or Then. It names an entry in a store and nothing that runs.";
  "THIS IS THE LIST A RETIREMENT IS WRITTEN FROM. The rankings next door are keyed by wording across the whole store, which answers which sentence to spend a round on but cannot answer what a single word is actually carrying: a wording written once is invisible to one of them, and a wording shared with another word is credited to the pair. Retiring from either is retiring from a summary, and a summary of the store is not the store.";
  "Measured on 2026-09-24: a round of retirements written from the ranking rewrote eighty seven entries for then and left thirty two behind, two of the commonest spellings among them at seven sightings each. They were near twins - the same sentence with one term swapped - and no reading that groups by wording will ever show a near twin, because to it they are two unrelated sentences and each one is small.";
  "The capital and the small letter are gathered together rather than asked for separately, and which spellings carried a wording travel back with it. A sentence that only ever appears on the capitalised word is a real thing to know, and asking twice and joining the answers by hand is how that gets missed.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let wanted = text_lower_to(word);
  let by_wording = {};
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries(chapter_code, fn);
    for (let entry of entries) {
      let spelling = entry.word;
      let left = text_lower_to(spelling);
      if (equal(left, wanted)) {
        let sentence = entry.explain;
        let row = by_wording[sentence];
        if (equal(row, undefined)) {
          row = {
            explain: sentence,
            entries: 0,
            spellings: [],
            chapter_codes: [],
          };
          by_wording[sentence] = row;
        }
        row.entries = row.entries + 1;
        let b = row.spellings.includes(spelling);
        if (not(b)) {
          row.spellings.push(spelling);
        }
        let b2 = row.chapter_codes.includes(chapter_code);
        if (not(b2)) {
          row.chapter_codes.push(chapter_code);
        }
      }
    }
  }
  await list_map_async(chapter_codes, chapter_read);
  let rows = object_values(by_wording);
  function entries_read(row) {
    let r2 = row.entries;
    return r2;
  }
  let ranked = list_sort_number_mapper_reverse(rows, entries_read);
  let entries_total = 0;
  for (let row of ranked) {
    entries_total = entries_total + row.entries;
  }
  let r = {
    word,
    chapters: list_size(chapter_codes),
    wordings: list_size(ranked),
    entries: entries_total,
    ranked,
  };
  return r;
}
