import { list_map } from "../../love/js/list_map.mjs";
import { object_merge_set } from "../../love/js/object_merge_set.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_shared_button_toggle_style } from "../../love/js/app_shared_button_toggle_style.mjs";
import { list_find_property_or_null } from "../../love/js/list_find_property_or_null.mjs";
import { list_remove_property } from "../../love/js/list_remove_property.mjs";
import { list_add } from "../../love/js/list_add.mjs";
import { list_multiple_is } from "../../love/js/list_multiple_is.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { null_not_is } from "../../love/js/null_not_is.mjs";
import { not } from "../../love/js/not.mjs";
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
    component = app_shared_button(root, name, on_click);
    update();
    function update() {
      let chosen = chosen_get();
      app_shared_button_toggle_style(chosen, component);
    }
    let to = object_merge_set(component, {
      update,
    });
    return component;
  }
  let buttons = list_map(languages, lambda);
  return buttons;
}
