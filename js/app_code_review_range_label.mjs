import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_review_range_label(lesson_number, scope) {
  "the label for a review after lesson_number covering the past scope lessons, like lessons 6 - 10";
  let end = lesson_number;
  let start = add(subtract(lesson_number, scope), 1);
  let start_text = text_to(start);
  let end_text = text_to(end);
  let label = text_combine_multiple(["lessons ", start_text, " - ", end_text]);
  return label;
}
