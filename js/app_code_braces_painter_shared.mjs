import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { app_code_braces_colors_random } from "./app_code_braces_colors_random.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
export function app_code_braces_painter_shared() {
  arguments_assert(arguments, 0);
  ("a painter of code with every pair of braces in a colour of its own, where two drawings whose braces stand in the same order wear the same colours: a worked example draws its program and its line of braces separately, and they have to agree. The colours for an order are put in a random order the first time that order is drawn and kept after.");
  let colors_by_order = {};
  function painter(component, code) {
    let order = app_code_braces_sequence(code);
    let missing = property_exists_not(colors_by_order, order);
    if (missing) {
      let random = app_code_braces_colors_random();
      property_set(colors_by_order, order, random);
    }
    let colors = property_get(colors_by_order, order);
    app_code_code_dark_lines_braces_paired_colors(component, code, colors);
  }
  return painter;
}
