import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_text_replace } from "./gloss_chapter_explains_text_replace.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_chapters_explains_text_replace(fn, before, after) {
  "Every chapter a gloss store holds, with a settled run of wording swapped for another wherever a word explanation says it, answering with the chapters that changed and how many explanations changed in each.";
  "It finds its own set by asking the store's folder what it holds rather than being handed a list, so it cannot be pointed at a list that has gone stale, and a chapter that never said the wording is left exactly as it was found.";
  "$plain before";
  "$plain after";
  "the two are runs of letters, the wording to look for and the wording to leave in its place. They are prose a reader sees and nothing that runs.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_replace(chapter_code) {
    let done = await gloss_chapter_explains_text_replace(
      chapter_code,
      fn,
      before,
      after,
    );
    return done;
  }
  let chapters = await list_map_async(chapter_codes, chapter_replace);
  let changed = list_filter_property_not(chapters, "count", 0);
  function chapter_count(chapter) {
    let one = property_get(chapter, "count");
    return one;
  }
  let count = list_map_sum(chapters, chapter_count);
  let r = {
    count,
    changed,
  };
  return r;
}
