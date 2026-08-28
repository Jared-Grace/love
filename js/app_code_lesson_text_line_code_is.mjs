import { arguments_assert } from "./arguments_assert.mjs";
import { digits } from "./digits.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_code_lesson_value_words } from "./app_code_lesson_value_words.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
export function app_code_lesson_text_line_code_is(text) {
  arguments_assert(arguments, 1);
  ("true when a short piece of a lesson is SHOWING a line of code rather than saying something about one.");
  ("A digit or a true or a false is what tells the two apart. The pieces reaching this have already been cut to card length, so what is left to reject is the short sentence that spells an operator while talking about it - === is not the same as == is a sentence, and every reading that asks what shape a line is written in would answer nonsense about it.");
  ("Every mark read off a line asks this first, so that the marks agree with each other about what counts as a line at all. Two readings each keeping their own idea of it would let a line be a sentence to one of them and code to the other, and the report would then hold marks nothing gathered from the same set of lines.");
  let words = [];
  let items = digits();
  list_add_multiple(words, items);
  let items2 = app_code_lesson_value_words();
  list_add_multiple(words, items2);
  let operand = text_includes_any(text, words);
  return operand;
}
