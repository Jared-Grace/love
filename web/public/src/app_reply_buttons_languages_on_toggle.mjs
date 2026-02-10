import { each } from "../../../love/public/src/each.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
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
      list_toggle(languages_chosen, language);
      html_style_background_color_set_or_remove_list(
        component,
        languages_chosen,
        language,
      );
      on_toggle();
    }
    component = html_button(root, name, on_click);
    html_style_background_color_set_or_remove_list(
      component,
      languages_chosen,
      language,
    );
  }
  each(languages, lambda);
}
