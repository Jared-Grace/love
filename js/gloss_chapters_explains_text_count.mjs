import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_text_passages } from "./gloss_chapter_explains_text_passages.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
export async function gloss_chapters_explains_text_count(fn, text) {
  "Every chapter in one gloss store whose word explanations say a named piece of text, each named with how many passages and how many explanations say it, and how many chapters were read to find them.";
  "$plain text";
  "the text is a run of letters to look for. It names words to read and nothing that runs.";
  "Asking one chapter at a time needs the chapter names first, and the store is the only place that knows them - so the whole store is read here, and a chapter written later is counted from the moment it exists.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let passages = await gloss_chapter_explains_text_passages(
      chapter_code,
      fn,
      text,
    );
    let counts = list_map_property(passages, "count");
    let r = {
      chapter_code,
      passages: list_size(passages),
      count: list_sum(counts),
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function saying_is(chapter) {
    let count = property_get(chapter, "count");
    let some = greater_than(count, 0);
    return some;
  }
  let saying = list_filter(chapters, saying_is);
  let r2 = {
    chapters: list_size(chapters),
    saying,
  };
  return r2;
}
