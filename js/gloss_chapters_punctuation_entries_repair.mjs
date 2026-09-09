import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
import { gloss_chapter_punctuation_entries_repair } from "./gloss_chapter_punctuation_entries_repair.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_punctuation_entries_repair(fn) {
  "Drop every explanation across one whole gloss store that explains a mark rather than a word, and answer with the chapters that had any.";
  "The store is read rather than a list of chapters being handed in, so nothing has to be kept in step with what has been authored, and a chapter written after this ran is repaired by running it again.";
  "It answers with only the chapters something was dropped from, because the ones it left alone are what the reader already assumed.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_punctuation_entries_repair(chapter_code, fn);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function repaired_is(chapter) {
    let any = property_greater_than(chapter, "removed", 0);
    return any;
  }
  let repaired = list_filter(chapters, repaired_is);
  let r2 = {
    chapters: list_size(chapters),
    repaired: list_size(repaired),
    removed: repaired,
  };
  return r2;
}
