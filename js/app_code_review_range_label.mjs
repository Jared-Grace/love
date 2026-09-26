import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_lessons_range_text } from "./app_code_lessons_range_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_review_range_label(lesson_number, scope) {
  "the label for a review after lesson_number covering the past scope lessons, like lessons 6 - 10";
  let end = lesson_number;
  let left = subtract(lesson_number, scope);
  let start = add(left, 1);
  let range = app_code_lessons_range_text(start, end);
  let label = text_combine_multiple(["lessons ", range]);
  return label;
}
