import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_review_diff_section(entry) {
  "One lesson's part of the written report: a heading naming the lesson, its place in the order and how much of it changed, and then the change itself.";
  "THE HEADING CARRIES THE NUMBERS THE LIST WAS SORTED BY, so a reader who has opened the file can see where they are without going back to the list they chose from.";
  "THE RULE OF EQUALS SIGNS IS THERE TO BE SEARCHED FOR. A written change is full of lines beginning with marks, and a heading that did not stand out from them could not be jumped between.";
  arguments_assert(arguments, 1);
  let v = String(entry.place);
  let v2 = String(entry.added);
  let v3 = String(entry.taken);
  let v4 = String(entry.moved);
  let heading = text_combine_multiple([
    "======== ",
    v,
    "  ",
    entry.lesson,
    "  +",
    v2,
    " -",
    v3,
    "  moved ",
    v4,
    "\n\n",
  ]);
  let section = text_combine_multiple([heading, entry.diff_text, "\n"]);
  return section;
}
