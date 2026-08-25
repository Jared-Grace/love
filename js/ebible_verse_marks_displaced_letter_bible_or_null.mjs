import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_verse_marks_displaced_letter_chapter } from "./ebible_verse_marks_displaced_letter_chapter.mjs";
export function ebible_verse_marks_displaced_letter_bible_or_null(
  bible_measured,
) {
  "$plain bible_measured";
  "One translation's entry in the letter - its folder, how many displaced verse marks it carries in all, and a chapter for each one that has any - or nothing at all where it has none.";
  "A TRANSLATION WITH NOTHING WRONG IN IT IS LEFT OUT ENTIRELY rather than written as an empty entry. The measure walks all three hundred and ninety-nine because it has to look at each one to know; a reader of this file is being told what is wrong, and two hundred and sixty-eight empty entries would bury the hundred and thirty-one that are the point.";
  "IT HANDS BACK NOTHING RATHER THAN AN EMPTY ENTRY so that the caller counts translations, chapters and marks off what it keeps. A count taken before the empty ones were dropped would say three hundred and ninety-nine translations are affected when a hundred and thirty-one are.";
  arguments_assert(arguments, 1);
  let bible_folder = property_get(bible_measured, "bible_folder");
  let chapters_measured = property_get(bible_measured, "found");
  function chapter_of(chapter_measured) {
    let chapter = ebible_verse_marks_displaced_letter_chapter(
      bible_folder,
      chapter_measured,
    );
    return chapter;
  }
  let chapters = list_map(chapters_measured, chapter_of);
  let none = list_empty_is(chapters);
  if (none) {
    return null;
  }
  function chapter_marks_size(chapter) {
    let marks = property_get(chapter, "marks");
    let size = list_size(marks);
    return size;
  }
  let marks = list_map_sum(chapters, chapter_marks_size);
  let bible = {
    bible_folder,
    marks,
    chapters,
  };
  return bible;
}
