import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_statement_title_name_id(words, code) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson: what the lesson is about in words, and then the shape of the line it teaches");
  ("Every lesson in this category teaches one line, so every one of them wants its title to show that line - and the four that exist were each spelling out the same six steps to do it. What differs between them is only the words and the line; everything else was the same run of work four times over.");
  ("The line is shown as well as named because the home list is read to find a lesson again rather than to meet it, and by then the line is what is remembered.");
  ("Only what is painted goes through here. The id a learner's finished lessons are stored under is built from the words, so a line may be shown, reworded or taken away without any learner losing their place.");
  let spaced = text_combine(words, " ");
  function paint(parent) {
    html_cycle_code(parent, [spaced, code]);
  }
  let rights = [words];
  let left = app_code_category_statements();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
