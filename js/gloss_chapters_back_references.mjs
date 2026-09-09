import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { gloss_chapter_back_references } from "./gloss_chapter_back_references.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_back_references(fn) {
  "Every chapter of one gloss store holding an explanation that points the reader further up instead of saying the thing itself.";
  "It reads the store and nothing else. No dictionary is asked and no word is looked up, so it covers every chapter and every word rather than the corner an outside reference happens to know - and what it finds is an explanation that was never given, which is certain in a way a disagreement with a dictionary is not.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let pointing = await gloss_chapter_back_references(chapter_code, fn);
    let r = {
      chapter_code,
      pointing,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function pointing_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "pointing");
    return offending;
  }
  let offenders = list_filter(chapters, pointing_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r2;
}
