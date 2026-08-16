import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
export function app_ceb_bible_gloss_passage_verses_read(
  passage,
  known,
  capitalised,
) {
  "One Cebuano passage cut into its verses, each verse carrying its Cebuano wording, its English wording, and every word beside what a dictionary says that word is built from.";
  "The dictionary and the list of words the book never writes in small letters are handed in rather than read here, because reading either one is the slow part and one reading serves a whole chapter. A single passage asking for both was the shape that made authoring a chapter cost a reading of the dictionary for every passage in it.";
  "The words are cut exactly as the gathering cut them, so what was looked up and what is handed over are the same list. Cut differently here, a word would arrive saying nothing was ever asked about it while its answer sat in the cache under a spelling this never asks for.";
  let verse_numbers = property_get(passage, "verse_numbers");
  let texts = property_get(passage, "texts");
  let cebuano_texts = list_first(texts);
  let english_texts = list_get(texts, 1);
  function word_read(word) {
    let key = text_lower_to(word);
    let capitalised_always = property_exists(capitalised, key);
    let held = property_exists(known, key);
    if (not(held)) {
      let absent = {
        word,
        capitalised_always,
        looked_up: false,
      };
      return absent;
    }
    let entry = property_get(known, key);
    let r = {
      word,
      capitalised_always,
      looked_up: true,
      analysed: property_get(entry, "analysed"),
      root: property_get(entry, "root"),
      affixes: property_get(entry, "affixes"),
    };
    return r;
  }
  function verse_read(verse_number, index) {
    let cebuano = list_get(cebuano_texts, index);
    let english = list_get(english_texts, index);
    let bare = text_punctuation_dash_kept_split(cebuano);
    let words = list_map(bare, word_read);
    let r = {
      verse_number,
      cebuano,
      english,
      words,
    };
    return r;
  }
  let verses = list_map_index(verse_numbers, verse_read);
  return verses;
}
