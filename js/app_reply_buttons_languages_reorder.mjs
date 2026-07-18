import { property_get } from "./property_get.mjs";
import { html_parent_append } from "./html_parent_append.mjs";
import { each } from "./each.mjs";
export function app_reply_buttons_languages_reorder(parent, languages, by_code) {
  ("re-append each existing button in the new language order; appendChild moves the node, so references stay valid");
  function lambda(language) {
    let code = property_get(language, "language_code");
    let button = property_get(by_code, code);
    html_parent_append(parent, button);
  }
  each(languages, lambda);
}
