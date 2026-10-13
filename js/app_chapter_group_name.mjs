import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { text_replace_if_starts_with } from "./text_replace_if_starts_with.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_chapter_group_name(chapter_code, first, last) {
  "$plain chapter_code";
  "$plain first";
  "$plain last";
  "What a group of verses is called when somebody writes it down: the book, the chapter, and the verses it runs from and to - Psalm 100:1-2, or John 3:16 when the group is one verse.";
  "One psalm is a Psalm. The book is listed as Psalms, which is right for the book and wrong in front of a single chapter of it, and this is the name of a single chapter.";
  arguments_assert(arguments, 3);
  let label = ebible_chapter_code_label(chapter_code);
  let chapter = text_replace_if_starts_with(label, "Psalms ", "Psalm ");
  if (equal(first, last)) {
    let one = text_combine_multiple([chapter, ":", first]);
    return one;
  }
  let name = text_combine_multiple([chapter, ":", first, "-", last]);
  return name;
}
