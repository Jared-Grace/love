import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_replace_button_symbol_style_box_shadow_value_width(
  color,
  width,
) {
  let r2 = text_combine_multiple([" 0 0 0 ", width, "em", " ", color]);
  return r2;
}
