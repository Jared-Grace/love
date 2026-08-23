import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
export function app_code_lesson_comment_note_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: writing a comment, followed by a comment");
  ("The line shown is a comment whose words are the word comment. Every other title in this category shows a line whose shape is the lesson, and here the shape is the two slashes and some words after them - so the words after them are the plainest ones there are, and the title is read as the slashes rather than as whatever the words happen to say.");
  ("Comment is the word, not note. The lesson teaches it as a note to people reading the code, which is what it is for, and then gives it the name everyone else in the world uses for it - the same way this app teaches quotient, divisor and identifier rather than a homely stand-in. A learner who leaves here knowing the thing and not its name cannot read a sentence anybody else writes about it.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "writing a comment";
  let code = js_code_comment_line("a comment");
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
