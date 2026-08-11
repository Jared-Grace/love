import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function app_g_verify_home_highlight_selected(
  selected_key,
  verse_buttons,
) {
  arguments_assert(arguments, 2);
  function lambda8(k) {
    let bg = equal(k, selected_key)
      ? app_shared_verse_selected_background_color()
      : "";
    html_style_background_color_set(verse_buttons[k], bg);
  }
  object_property_names(verse_buttons).forEach(lambda8);
}
