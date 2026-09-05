import { app_en_learn_bible_gloss_urdu_chapters_absent } from "./app_en_learn_bible_gloss_urdu_chapters_absent.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_gloss_urdu_bible_folders } from "./app_en_learn_bible_gloss_urdu_bible_folders.mjs";
import { list_first } from "./list_first.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { list_size } from "./list_size.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { list_map } from "./list_map.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function app_en_learn_bible_gloss_urdu_entries_absent() {
  "How many word explanations the chapters this store has not begun would come to, with the verses they are spread over.";
  "The cost of finishing is a decision somebody is making, and a count of chapters cannot price it: the chapter that was timed held seventeen verses where the average holds nearer thirty, so multiplying a measured chapter by the chapters left is out by half. An explanation is written once per word of the English wording, so the words are the unit that carries across, and they are countable today from text already on this disk.";
  "The words are cut exactly as the check that lays an explanation beside its passage cuts them, so the count is the number of entries that check will demand rather than an estimate of it.";
  "The English text is read and not the Urdu, because the explanations are about the English wording; the Urdu is what they are written in.";
  let absent = await app_en_learn_bible_gloss_urdu_chapters_absent();
  let chapter_codes = property_get(absent, "chapter_codes");
  let bible_folders = app_en_learn_bible_gloss_urdu_bible_folders();
  let bible_folder = list_first(bible_folders);
  function verse_words_size(verse) {
    let text = property_get(verse, "text");
    let words = text_punctuation_split(text);
    let size = list_size(words);
    return size;
  }
  async function chapter_counted(chapter_code) {
    let verses = await bible_chapter_verses(bible_folder, chapter_code);
    let sizes = list_map(verses, verse_words_size);
    let counted = {
      chapter_code,
      verses: list_size(verses),
      entries: list_sum(sizes),
    };
    return counted;
  }
  function chapter_verses(counted) {
    let v = property_get(counted, "verses");
    return v;
  }
  function chapter_entries(counted) {
    let v = property_get(counted, "entries");
    return v;
  }
  let counted = await list_map_async(chapter_codes, chapter_counted);
  let verses_each = list_map(counted, chapter_verses);
  let entries_each = list_map(counted, chapter_entries);
  let r = {
    chapters: list_size(counted),
    verses: list_sum(verses_each),
    entries: list_sum(entries_each),
  };
  return r;
}
