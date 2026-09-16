import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_same_as_faults } from "./gloss_chapter_same_as_faults.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_same_as_faults(fn) {
  "Every chapter of one gloss store holding a pointer that does not land on exactly one explanation.";
  "It reads the store and nothing else. A pointer names a word and a verse of the same chapter, so whether it lands is settled inside the chapter it stands in, with nothing outside to be out of date with.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let faults = await gloss_chapter_same_as_faults(chapter_code, fn);
    let r = {
      chapter_code,
      faults,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function faulty_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "faults");
    return offending;
  }
  let offenders = list_filter(chapters, faulty_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r2;
}
