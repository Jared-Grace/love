import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { html_span_code_dark } from "./html_span_code_dark.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_color } from "./app_code_lesson_console_log_remainder_generic_remainder_color.mjs";
import { app_code_lesson_number_chip_lifted } from "./app_code_lesson_number_chip_lifted.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_console_log_remainder_generic_equation_with_remainder(
  parent,
  prefix_expr,
  remainder,
  result,
  divisor,
) {
  arguments_assert(arguments, 5);
  ("the whole sum as one continuous dark code tile, with the remainder as its blue chip sitting on top inside the tile (not splitting it in three): before text, the remainder chip, then === result; the remainder here is the largest one (divisor-1), which the reversed spectrum makes the lightest blue, and two box-shadow rings (a light ring hugging the chip, then a dark ring beyond it) lift it off the black tile");
  let triple_equal = js_operator_triple_equal_symbol();
  let tile = html_span_code_dark(parent);
  let before = text_combine(prefix_expr, " + ");
  html_span_text(tile, before);
  let color = app_code_lesson_console_log_remainder_generic_remainder_color(
    remainder,
    divisor,
  );
  app_code_lesson_number_chip_lifted(tile, remainder, color);
  let t = text_to(result);
  let after = text_combine_multiple([" ", triple_equal, " ", t]);
  html_span_text(tile, after);
}
