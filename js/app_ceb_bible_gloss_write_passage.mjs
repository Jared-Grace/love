import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
export async function app_ceb_bible_gloss_write_passage(
  chapter_code,
  verse_key,
) {
  "Everything needed to author one named Cebuano passage: its Cebuano wording, its English wording, and each of its verses cut into words with what a dictionary says each word is built from.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses one passage of it covers. Neither names anything that runs.";
  "The root and the affixes are handed over rather than worked out, for the same reason the Greek parsing is: a root is a claim about a language, and a word's shape is exactly the evidence that misleads. Cebuano builds a word by putting sounds inside it as well as around it, and a prefix that changes the sound it lands on leaves a root nobody can see - so a root read off the letters is a guess dressed as a fact, and it reads the same as a true one.";
  "A word the dictionary was never asked about is said to be so, rather than arriving looking like a word it had nothing to say about. The two are opposite instructions to an author: one is a gap in the gathering and is somebody's to fill, and the other is the dictionary's own silence and is to be respected.";
  "It also answers with the file to write the explanations into, because that name is a convention and a convention nobody can see is a convention nobody can follow.";
  "The passage is named rather than found, which is what lets a passage that already carries explanations be authored again. That matters here more than on the Greek side, because every Cebuano chapter now in the store was generated rather than authored, so re-authoring is not the exception but the whole of the work.";
  let passages = await app_ceb_bible_gloss_passages(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let verse_numbers = property_get(passage, "verse_numbers");
  let texts = property_get(passage, "texts");
  let cebuano_texts = list_first(texts);
  let english_texts = list_get(texts, 1);
  let known = await binisaya_words_known();
  ("The words are cut exactly as the gathering cut them, so what was looked up and what is handed over are the same list. Cut differently here, a word would arrive saying nothing was ever asked about it while its answer sat in the cache under a spelling this never asks for.");
  function word_read(word) {
    let key = text_lower_to(word);
    let held = property_exists(known, key);
    if (not(held)) {
      let absent = {
        word,
        looked_up: false,
      };
      return absent;
    }
    let entry = property_get(known, key);
    let r = {
      word,
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
  let file = gloss_write_file_path(
    chapter_code,
    verse_key,
    app_ceb_bible_gloss_generate,
  );
  let r2 = {
    chapter_code,
    verse_key,
    file,
    verses,
  };
  return r2;
}
