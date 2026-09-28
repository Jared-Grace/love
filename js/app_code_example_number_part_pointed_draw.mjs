import { app_code_code_dark_lines_number_part_pointed } from "./app_code_code_dark_lines_number_part_pointed.mjs";
import { app_code_output_pointed } from "./app_code_output_pointed.mjs";
import { app_code_code_lines_writes_out_on } from "./app_code_code_lines_writes_out_on.mjs";
export function app_code_example_number_part_pointed_draw(pointers) {
  "the last example of a formula lesson drawn with part of a number coloured, in its code and its output alike: an example_pointers function for a lesson whose writing colours the 3 at the end of 123, or the 12 in front of it";
  function draw(box, lines, output) {
    let on_code = app_code_code_dark_lines_number_part_pointed(pointers);
    let on_output = app_code_output_pointed(pointers);
    app_code_code_lines_writes_out_on(box, lines, output, on_code, on_output);
  }
  return draw;
}
