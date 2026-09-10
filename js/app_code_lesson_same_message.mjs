import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_same_as_message } from "./app_code_lesson_same_as_message.mjs";
export function app_code_lesson_same_message(right) {
  arguments_assert(arguments, 1);
  ("the common case of that sentence: the lesson being repeated is the one immediately before this one, so it needs no naming");
  let r = app_code_lesson_same_as_message("the previous lesson", right);
  return r;
}
