import { arguments_assert } from "./arguments_assert.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_remove } from "./text_remove.mjs";
export function app_code_lessons_review_since_lesson_names_of_text(
  t,
  lesson_prefix,
) {
  arguments_assert(arguments, 2);
  let lines = text_lines_working(t);
  let named = [];
  for (let line of lines) {
    if (text_starts_with(line, lesson_prefix)) {
      let replaced = text_remove(line, ",");
      named.push(replaced);
    }
  }
  return named;
}
