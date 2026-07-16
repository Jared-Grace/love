import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_symbol_tile_style_box_shadow_value_width(
  color,
  width,
) {
  let r = text_combine_multiple([" 0 0 0 ", width, "em", " ", color]);
  return r;
}
