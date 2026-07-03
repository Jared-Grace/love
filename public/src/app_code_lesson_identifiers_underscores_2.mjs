import { app_code_lesson_identifiers_underscores_generic } from "../../../love/public/src/app_code_lesson_identifiers_underscores_generic.mjs";
import { html_span_text_code_dark_centered } from "../../../love/public/src/html_span_text_code_dark_centered.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_div_cycle_mono_multiple } from "../../../love/public/src/html_div_cycle_mono_multiple.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_identifiers_underscores_2() {
  if (false) {
    html_div_cycle_mono_multiple(c, [
      ["Identifiers can also have a ", "$", " (dollar sign)"],
      ["But identifiers cannot have a ", ".", " (period) symbol"],
    ]);
  }
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
  );
  return r;
}
