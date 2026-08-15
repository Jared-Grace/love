import { g_sermon_lines_shared } from "./g_sermon_lines_shared.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function g_sermon_words_added_tally() {
  "Every word the written sermon lines add beyond their own passages, each with how many lines spend it and where those lines sit - the introduced vocabulary of every sermon written so far, gathered so it can be read rather than remembered.";
  "A gloss that introduces a word which itself needs glossing has bought nothing, and one line on its own can never show that. The whole spend has to lie side by side before a word can be judged as reaching further than the passage ever earned.";
  "Ordered by how many lines spend a word, so the vocabulary carrying the most weight is read first, and the places are kept beside every count because a word that reads oddly has to be reachable back to the line that spent it.";
  let readings = await g_sermon_lines_shared();
  let places_by_word = {};
  for (let reading of readings) {
    for (let word of reading.added) {
      let places = property_get_or(places_by_word, word, []);
      list_add(places, {
        chapter_code: reading.chapter_code,
        verses: reading.verse_numbers,
      });
      property_set(places_by_word, word, places);
    }
  }
  let words = object_property_names(places_by_word);
  function word_counted(word) {
    let places = property_get_or(places_by_word, word, []);
    let entry = {
      word,
      lines: places.length,
      places,
    };
    return entry;
  }
  let entries = list_map(words, word_counted);
  function lines_of(entry) {
    let count = entry.lines;
    return count;
  }
  let ordered = list_sort_number_mapper_reverse(entries, lines_of);
  return ordered;
}
