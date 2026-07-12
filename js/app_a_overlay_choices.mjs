import { list_to_dictionary_property } from "./list_to_dictionary_property.mjs";
import { app_a_buttons_shortcuts_wide } from "./app_a_buttons_shortcuts_wide.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { app_a_choice_close } from "./app_a_choice_close.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
import { app_a_overlay_keydown } from "./app_a_overlay_keydown.mjs";
export function app_a_overlay_choices(a, component, lambda$o$choices) {
  async function on_click() {
    let o = app_a_overlay_keydown(a, on_keydown);
    let choices = [];
    await lambda$o$choices(o, choices);
    let overlay_close = property_get(o, "overlay_close");
    let choice_x = app_a_choice_close(overlay_close);
    list_add_first(choices, choice_x);
    let overlay = property_get(o, "overlay");
    app_a_buttons_shortcuts_wide(overlay, choices);
    ("this makes sure there is at most one choice per shortcut");
    list_to_dictionary_property(choices, "shortcut");
    function on_keydown(e) {
      app_a_on_keydown(e, choices);
    }
  }
  html_on_click(component, on_click);
}
