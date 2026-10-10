import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { equal } from "./equal.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { not } from "./not.mjs";
import { app_code_braces_colors_next } from "./app_code_braces_colors_next.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
export function app_code_braces_painter_shared() {
  arguments_assert(arguments, 0);
  ("a painter of code with every pair of braces in a colour of its own, where a line of only braces wears the colours of the program drawn last whose braces stand in that order: a worked example draws its program and then its line of braces separately, and the two have to agree.");
  ("Every program drawn takes new colours from the one bag the whole app draws from, so two worked examples on one page whose braces stand in the same order still wear different colours, as the human asked 2026-10-11. Rejected: keeping the colours an order was first given, which is what was here before. It gave two different programs with braces in the same order the same colours.");
  let colors_by_order = {};
  function painter(component, code) {
    let order = app_code_braces_sequence(code);
    let line = equal(code, order);
    let missing = property_exists_not(colors_by_order, order);
    if (not(line) || missing) {
      let drawn = app_code_braces_colors_next(code);
      property_set(colors_by_order, order, drawn);
    }
    let colors = property_get(colors_by_order, order);
    app_code_code_dark_lines_braces_paired_colors(component, code, colors);
  }
  return painter;
}
