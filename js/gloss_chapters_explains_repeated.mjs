import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_repeated } from "./gloss_chapter_explains_repeated.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_explains_repeated(fn) {
  "Every chapter of one gloss store handing one word's explanation to another word as well, and how many chapters were read to find them.";
  "How many were read travels out beside what was found, because the two together are what tells a clean store apart from a sweep that has stopped reaching one. Both answer with no offenders, and the number of chapters read is the only part of the answer that falls when the store moves or the drive is not mounted.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let repeated = await gloss_chapter_explains_repeated(chapter_code, fn);
    let r = {
      chapter_code,
      repeated,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function repeated_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "repeated");
    return offending;
  }
  let offenders = list_filter(chapters, repeated_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r2;
}
