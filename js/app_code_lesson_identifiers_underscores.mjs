import { app_code_lesson_identifiers_underscores_generic } from "./app_code_lesson_identifiers_underscores_generic.mjs";
import { html_span_text_code_dark_centered } from "./html_span_text_code_dark_centered.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_articled_pad_space } from "./text_articled_pad_space.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_identifiers_underscores() {
  let separator_valid = "_";
  let separator_valid_name = "underscore";
  let separator_invalid = "-";
  let separator_invalid_name = "hyphen";
  let r = app_code_lesson_identifiers_underscores_generic(
    separator_invalid_name,
    separator_invalid,
    separator_valid_name,
    separator_valid,
    defines_after,
    [],
    true,
  );
  function defines_after(root) {
    let c = app_code_container_light_blue(root);
    html_div_text(c, "How they look different:");
    let div = html_div(c);
    html_style_assign(div, {
      display: "grid",
      "grid-template-columns": "auto 1fr",
    });
    app_code_flex_gap(div);
    html_span_text_code_dark_centered(div, separator_invalid);
    html_div_text(
      div,
      text_combine_multiple([
        "The line of",
        text_articled_pad_space(separator_invalid_name),
        "is shorter and is near the middle vertically, not the bottom or the top",
      ]),
    );
    let d = html_span_text_code_dark_centered(div, separator_valid);
    html_div_text(
      div,
      text_combine_multiple([
        "The line of",
        text_articled_pad_space(separator_valid_name),
        "is longer and is near the bottom",
      ]),
    );
  }
  return r;
}
