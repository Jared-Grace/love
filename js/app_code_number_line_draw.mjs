import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_number_line } from "./app_code_number_line.mjs";
export function app_code_number_line_draw(low, high, step, ends, middle) {
  arguments_assert(arguments, 5);
  ("$plain middle");
  ("a number line waiting for its box: an entry for a lesson's explain list, drawn in its place among the writing");
  function draw(box) {
    app_code_number_line(box, low, high, step, ends, middle);
  }
  return draw;
}
