import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_repeated_kinds } from "./gloss_chapter_explains_repeated_kinds.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_chapters_explains_repeated(fn) {
  "How much of a whole gloss store stands in a repeated group, split by whether the wording was handed to one word met again or to genuinely different words, beside how many chapters were read and how many explanations the store holds.";
  "How many were read travels out beside what was found, because the two together are what tells a clean store apart from a sweep that has stopped reaching one. Both answer with nothing wrong, and the number of chapters read is the only part of the answer that falls when the store moves or the drive is not mounted.";
  "How many explanations the store holds counts every chapter and not only the offending ones, because it is the whole the shares are taken out of - and a whole made only of the chapters that went wrong would say the store was entirely repetition every time.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  "Which chapters and which wordings is a separate question with its own reader, because a sweep that carried every offending sentence out of a quarter of a million explanations would bury the two numbers it was asked for.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_explains_repeated_kinds(chapter_code, fn);
    return found;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function chapter_same_read(chapter) {
    let n = property_get(chapter, "same");
    return n;
  }
  function chapter_across_read(chapter) {
    let n = property_get(chapter, "across");
    return n;
  }
  function chapter_entries_read(chapter) {
    let n = property_get(chapter, "entries");
    return n;
  }
  let r = {
    chapters: list_size(chapter_codes),
    entries: list_map_sum(chapters, chapter_entries_read),
    same: list_map_sum(chapters, chapter_same_read),
    across: list_map_sum(chapters, chapter_across_read),
  };
  return r;
}
