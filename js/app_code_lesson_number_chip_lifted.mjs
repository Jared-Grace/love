import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { app_code_lesson_chip_lift } from "./app_code_lesson_chip_lift.mjs";
export function app_code_lesson_number_chip_lifted(tile, number, color) {
  arguments_assert(arguments, 3);
  ("a color chip embedded INSIDE a dark tile, lifted off the black by rings - the same way the % lesson embeds its remainder chip in a code tile");
  let made = app_code_lesson_number_chip(tile, number, color);
  app_code_lesson_chip_lift(made);
  return made;
}
