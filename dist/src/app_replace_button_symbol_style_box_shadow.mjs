import { html_style_set_or_remove } from "../../../love/public/src/html_style_set_or_remove.mjs";
export function app_replace_button_symbol_style_box_shadow(valid, sb, h) {
  html_style_set_or_remove(
    valid,
    sb,
    "box-shadow",
    " 0 0 0 " + "0.1em" + " " + h,
  );
}
