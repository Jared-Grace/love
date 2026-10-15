import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { text_replace_if_starts_with } from "./text_replace_if_starts_with.mjs";
export function app_chapter_group_chapter_label(chapter_code) {
  "$plain chapter_code";
  "What one chapter is called when somebody writes it down: the book and the chapter - Psalm 100, or John 3.";
  "One psalm is a Psalm. The book is listed as Psalms, which is right for the book and wrong in front of a single chapter of it, and this is the name of a single chapter.";
  let label = ebible_chapter_code_label(chapter_code);
  let chapter = text_replace_if_starts_with(label, "Psalms ", "Psalm ");
  return chapter;
}
