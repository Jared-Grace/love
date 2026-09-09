import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_pointers_dangling } from "./gloss_chapter_pointers_dangling.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_pointers_dangling_ranked(
  fn,
  lambda$pointer_is,
) {
  "The chapters of a gloss store that send the reader back to a word met earlier and leave nothing there, heaviest first, each with the words it happened to.";
  "The count of how many is a different question with its own reader, and this is the one that says where to go and what to write. A chapter carrying forty of them and a chapter carrying one are the same number to a total and are not the same afternoon's work.";
  "Chapters with none are left out, because a list naming every chapter in the store would bury the handful that need reading.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_pointers_dangling(
      chapter_code,
      fn,
      lambda$pointer_is,
    );
    let pointing = property_get(found, "pointing");
    let dangling = property_get(found, "dangling");
    let words = property_get(found, "words");
    let row = {
      chapter_code,
      pointing,
      dangling,
      words,
    };
    return row;
  }
  let rows = await list_map_async(chapter_codes, chapter_read);
  function row_dangling_read(row) {
    let dangling = property_get(row, "dangling");
    return dangling;
  }
  function row_dangling_any_is(row) {
    let dangling = property_get(row, "dangling");
    let any = greater_than(dangling, 0);
    return any;
  }
  let offending = list_filter(rows, row_dangling_any_is);
  let ranked = list_sort_number_mapper_reverse(offending, row_dangling_read);
  let r = {
    chapters: list_size(chapter_codes),
    offending: list_size(ranked),
    ranked,
  };
  return r;
}
