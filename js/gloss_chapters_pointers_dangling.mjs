import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_pointers_dangling } from "./gloss_chapter_pointers_dangling.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_chapters_pointers_dangling(fn, lambda$pointer_is) {
  "How many explanations in a whole gloss store point the reader back at a word met earlier, how many of those point at nothing, and how many chapters were read to find out.";
  "How many were read travels out beside what was found, because the two together are what tells a clean store apart from a sweep that has stopped reaching one. Both answer with nothing wrong, and the number of chapters read is the only part of the answer that falls when the store moves or the drive is not mounted.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is looked at from the moment it is written and nobody has to remember to name it anywhere.";
  "Every chapter is judged on its own and the answers added up, never gathered into one heap first. A word explained in Matthew and pointed back at in Mark was never met by the reader of Mark, and a heap would say it was.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_pointers_dangling(
      chapter_code,
      fn,
      lambda$pointer_is,
    );
    return found;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function chapter_pointing_read(chapter) {
    let n = property_get(chapter, "pointing");
    return n;
  }
  function chapter_dangling_read(chapter) {
    let n = property_get(chapter, "dangling");
    return n;
  }
  let r = {
    chapters: list_size(chapter_codes),
    pointing: list_map_sum(chapters, chapter_pointing_read),
    dangling: list_map_sum(chapters, chapter_dangling_read),
  };
  return r;
}
