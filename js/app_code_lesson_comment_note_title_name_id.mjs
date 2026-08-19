import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
export function app_code_lesson_comment_note_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: writing a note in the code, followed by a note");
  ("The line shown is a note whose words are the word note. Every other title in this category shows a line whose shape is the lesson, and here the shape is the two slashes and some words after them - so the words after them are the plainest ones there are, and the title is read as the slashes rather than as whatever the words happen to say.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "writing a note in the code";
  let code = js_code_comment_line("a note");
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
