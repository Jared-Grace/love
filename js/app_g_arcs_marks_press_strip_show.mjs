import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_g_arcs_marks_press_strip_show(open, at, strip, lister) {
  arguments_assert(arguments, 4);
  property_set(at, "open", open);
  let how = "none";
  let word = "list";
  if (open) {
    how = "flex";
    word = "hide";
  }
  html_style_set(strip, "display", how);
  html_text_set(lister, word);
}
