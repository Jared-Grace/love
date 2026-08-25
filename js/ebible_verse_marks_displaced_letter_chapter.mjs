import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ebible_url } from "./ebible_url.mjs";
export function ebible_verse_marks_displaced_letter_chapter(
  bible_folder,
  chapter_measured,
) {
  "$plain bible_folder";
  "$plain chapter_measured";
  "One chapter's entry in the letter - its code, the address it can be read at, and every verse mark in it whose id names a different verse from the one it prints.";
  "EVERY CHAPTER CARRIES ITS OWN EBIBLE URL so the file can be worked through straight down the page. Rebuilding the address from a folder and a chapter code is a thing this repo knows how to do and the person receiving the letter has no reason to.";
  "THE PRINTED LABEL IS GIVEN AS IT APPEARS RATHER THAN AS DIGITS, because the label is the whole of what makes the mark wrong - a plain number is never affected, and a reader sorting these will want to see which shapes their publishing produces.";
  arguments_assert(arguments, 2);
  let chapter_code = property_get(chapter_measured, "chapter_code");
  let marks_measured = property_get(chapter_measured, "found");
  function mark_row(mark_measured) {
    let prints = property_get(mark_measured, "name");
    let id = property_get(mark_measured, "number");
    let row = {
      prints,
      id,
    };
    return row;
  }
  let marks = list_map(marks_measured, mark_row);
  let r = ebible_url();
  let url = text_combine_multiple([r, bible_folder, "/", chapter_code, ".htm"]);
  let chapter = {
    chapter_code,
    url,
    marks,
  };
  return chapter;
}
