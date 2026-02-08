import { list_to_dictionary_property } from "../../../love/public/src/list_to_dictionary_property.mjs";
import { app_a_buttons_shortcuts_wide } from "../../../love/public/src/app_a_buttons_shortcuts_wide.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { app_a_choice_close } from "../../../love/public/src/app_a_choice_close.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
export function app_a_overlay_choices(a, component, lambda$o) {
  async function on_click() {
    let o = app_a_overlay_keydown(a, on_keydown);
    let choices = [];
    await lambda$o(o, choices);
    let overlay_close = object_property_get(o, "overlay_close");
    let choice_x = app_a_choice_close(overlay_close);
    list_add_first(choices, choice_x);
    let overlay = object_property_get(o, "overlay");
    app_a_buttons_shortcuts_wide(overlay, choices);
    ("this makes sure there is at most one choice per shortcut");
    list_to_dictionary_property(choices, "shortcut");
    function on_keydown(e) {
      app_a_on_keydown(e, choices);
    }
  }
  html_on_click(component, on_click);
}
