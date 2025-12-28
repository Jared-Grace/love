import { marker } from "../../../love/public/src/marker.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_style_background_color_set_or_remove } from "../../../love/public/src/html_style_background_color_set_or_remove.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
export function app_reply_button(languages_chosen, language, root, name) {
  marker("1");
  function lambda3() {
    list_toggle(languages_chosen, language);
    let chosen = list_includes(languages_chosen, language);
    html_style_background_color_set_or_remove(chosen, component, "lightgreen");
  }
  component = html_button(root, name, lambda3);
  return component;
}
