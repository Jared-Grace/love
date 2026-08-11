import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
export function app_code_lesson_expression_repeated_generic_chip(
  parent,
  number,
  color,
) {
  arguments_assert(arguments, 3);
  ("a standalone color chip sitting in the sentence on the light background, matching a number inside the code");
  let made = app_code_lesson_number_chip(parent, number, color);
  return made;
}
