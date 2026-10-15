import { arguments_assert } from "./arguments_assert.mjs";
import { app_chapter_group_chapter_label } from "./app_chapter_group_chapter_label.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_chapter_group_name(chapter_code, first, last) {
  "$plain chapter_code";
  "$plain first";
  "$plain last";
  "What a group of verses is called when somebody writes it down: the book, the chapter, and the verses it runs from and to - Psalm 100:1-2, or John 3:16 when the group is one verse.";
  arguments_assert(arguments, 3);
  let chapter = app_chapter_group_chapter_label(chapter_code);
  if (equal(first, last)) {
    let one = text_combine_multiple([chapter, ":", first]);
    return one;
  }
  let name = text_combine_multiple([chapter, ":", first, "-", last]);
  return name;
}
