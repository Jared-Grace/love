import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_words_unicode_repair } from "./gloss_chapter_words_unicode_repair.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_words_unicode_repair(fn, words_read) {
  "Put back, across every authored chapter of one gloss store, the exact letters each passage is written with, wherever an explanation names the same word in a different spelling of the same letters - answering with the chapters that needed mending and how many were read.";
  "The store is read rather than a list of chapters being handed in, so the set repaired is exactly the set that is broken and cannot drift from it. That matters more here than anywhere: the drift being mended is invisible on the screen, so a hand-written list of chapters to repair would be a list somebody guessed.";
  "A chapter needing nothing is left with its bytes exactly where they were, so this can be run over the whole store at any time, and running it twice changes nothing the second time.";
  "How many chapters were read travels out beside what was mended, for the same reason it does when the same store is checked: mending nothing and reaching nothing are otherwise the same answer, and these stores sit on a drive that is not always mounted.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_repair(chapter_code) {
    let r = await gloss_chapter_words_unicode_repair(
      chapter_code,
      fn,
      words_read,
    );
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_repair);
  function mended_is(chapter) {
    let mended = property_list_empty_not_is(chapter, "repaired");
    return mended;
  }
  let repaired = list_filter(chapters, mended_is);
  let r2 = {
    chapters: list_size(chapters),
    repaired,
  };
  return r2;
}
