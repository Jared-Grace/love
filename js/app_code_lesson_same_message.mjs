import { app_code_lesson_same_which } from "./app_code_lesson_same_which.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_same_as_message } from "./app_code_lesson_same_as_message.mjs";
export function app_code_lesson_same_message(fn_reading, fn_repeated, right) {
  arguments_assert(arguments, 3);
  ("that sentence with the lesson it names worked out rather than typed: a caller hands over itself and the lesson it is repeating, as the two lesson functions, and where those two sit in the course decides the wording");
  ("It used to take the words alone and always say the previous lesson. That was true of four of its five callers and false of the fifth, and nothing could tell the four from the one, because the claim was written in prose while the thing it claimed about was a list - and the list is edited by adding to the middle of it. Corrected 2026-09-11.");
  let which = app_code_lesson_same_which(fn_reading, fn_repeated);
  let r = app_code_lesson_same_as_message(which, right);
  return r;
}
