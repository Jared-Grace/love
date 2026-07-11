import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function app_reply_buttons_languages_on_toggle(
  languages_chosen,
  on_toggle,
  root,
  languages,
) {
  function lambda(language) {
    let name = property_get(language, "name");
    let component = null;
    function on_click() {
      let chosen = list_includes(languages_chosen, language);
      let m = list_multiple_is(languages_chosen);
      let last_chosen = chosen && not(m);
      if (last_chosen) {
        return;
      }
      list_toggle(languages_chosen, language);
      update();
      on_toggle();
    }
    component = html_button(root, name, on_click);
    update();
    function update() {
      html_style_background_color_set_or_remove_list(
        component,
        languages_chosen,
        language,
      );
    }
    let to = object_merge_set(component, {
      update,
    });
    return component;
  }
  let buttons = list_map(languages, lambda);
  return buttons;
}
