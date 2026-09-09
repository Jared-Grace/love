import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { lists_combine_unique } from "./lists_combine_unique.mjs";
import { gloss_chapter_words_distinct } from "./gloss_chapter_words_distinct.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function gloss_chapters_words_distinct(fn) {
  "Every different word a whole gloss store explains anywhere in it, each counted once.";
  "This is what says how much asking an outside dictionary about the store would cost, before any of it is asked - the store holds a word once for every time it is explained, and the same handful of small words carry most of that weight, so the number of things to look up is far smaller than the number of explanations and the difference is worth knowing first.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is counted from the moment it is written.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_words_distinct(chapter_code, fn);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  let distinct = lists_combine_unique(chapters);
  return distinct;
}
