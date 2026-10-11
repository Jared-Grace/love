import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_brace_lines_draw } from "./app_code_brace_lines_draw.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { each } from "./each.mjs";
export function app_code_brace_lines_shown(parent, question, color) {
  arguments_assert(arguments, 3);
  ("a worked example of the lines between a pair of braces, already answered: the pair and every line between its two braces wear one colour, drawn plain, as code that is read rather than tapped; asked for by the human 2026-10-11, to stand above the choosing");
  let entries = app_code_brace_lines_draw(parent, question, color, false);
  function paint(drawn) {
    let b = property_get(drawn, "between");
    if (not(b)) {
      return;
    }
    let chip = property_get(drawn, "chip");
    html_style_background_color_set(chip, color);
    html_font_color_set_white(chip);
  }
  each(entries, paint);
}
