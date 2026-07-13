import { list_map } from "./list_map.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_replace_button_rule_background_color } from "./app_replace_button_rule_background_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_style_background_color_set_if_else } from "./html_style_background_color_set_if_else.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_remove_property } from "./list_remove_property.mjs";
import { list_add } from "./list_add.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
export function app_reply_buttons_languages_on_toggle(
  languages_chosen,
  on_toggle,
  root,
  languages,
) {
  function lambda(language) {
    let name = property_get(language, "name");
    let language_code = property_get(language, "language_code");
    let component = null;
    function chosen_get() {
      let found = list_find_property_or_null(
        languages_chosen,
        "language_code",
        language_code,
      );
      let chosen = null_not_is(found);
      return chosen;
    }
    function on_click() {
      let chosen = chosen_get();
      let m = list_multiple_is(languages_chosen);
      let last_chosen = chosen && not(m);
      if (last_chosen) {
        return;
      }
      if (chosen) {
        list_remove_property(languages_chosen, "language_code", language_code);
      } else {
        list_add(languages_chosen, language);
      }
      update();
      on_toggle();
    }
    component = app_replace_button(root, name, on_click);
    update();
    function update() {
      let chosen = chosen_get();
      let chosen_color = app_shared_button_background();
      let unchosen_color = app_replace_button_rule_background_color();
      html_style_background_color_set_if_else(
        chosen,
        component,
        chosen_color,
        unchosen_color,
      );
      let chosen_font_color = app_shared_button_font_color();
      html_font_color_set_if(chosen, component, chosen_font_color, "black");
    }
    let to = object_merge_set(component, {
      update,
    });
    return component;
  }
  let buttons = list_map(languages, lambda);
  return buttons;
}
