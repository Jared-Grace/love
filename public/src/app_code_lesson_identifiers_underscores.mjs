import { app_code_lesson_identifiers_underscores_generic } from "../../../love/public/src/app_code_lesson_identifiers_underscores_generic.mjs";
import { html_span_text_code_dark_centered } from "../../../love/public/src/html_span_text_code_dark_centered.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_identifiers_underscores() {
  const separator_valid = "_";
  let separator_valid_name = "underscore";
  const separator_invalid = "-";
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
    let c4 = app_code_container_light_blue(root);
    html_div_text(c4, "How they look different:");
    let div3 = html_div(c4);
    html_style_assign(div3, {
      display: "grid",
      "grid-template-columns": "auto 1fr",
    });
    app_code_flex_gap(div3);
    html_span_text_code_dark_centered(div3, separator_invalid);
    html_div_text(
      div3,
      "The line of" +
        text_articled_pad_space(separator_invalid_name) +
        "is shorter and is near the middle vertically, not the bottom or the top",
    );
    let d = html_span_text_code_dark_centered(div3, separator_valid);
    html_div_text(
      div3,
      "The line of" +
        text_articled_pad_space(separator_valid_name) +
        "is longer and is near the bottom",
    );
  }
  return r;
}
