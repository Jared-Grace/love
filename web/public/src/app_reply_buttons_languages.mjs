import { each } from "../../../love/public/src/each.mjs";
import { app_reply_button } from "../../../love/public/src/app_reply_button.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_reply_buttons_languages(languages_chosen, root, languages) {
  function lambda(language) {
    let name = object_property_get(language, "name");
    let component = app_reply_button(languages_chosen, language, root, name);
  }
  each(languages, lambda);
}
