import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get_invoke } from "./property_get_invoke.mjs";
import { each } from "./each.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_reply_main_shortcuts_shortcut_each(
  s,
  languages_chosen,
  languages,
  update,
  buttons_languages,
  buttons_responses,
  root,
) {
  arguments_assert(arguments, 7);
  let name = property_get(s, "name");
  let languages2 = property_get(s, "languages");
  let count = property_get(s, "count");
  let responses = property_get(s, "responses");
  async function lambda5() {
    app_reply_languages_chosen_reset(languages_chosen, languages2, languages);
    await update(count);
    list_map_property_invoke(buttons_languages, "update");
    function lambda7(r) {
      let b = list_find_property(buttons_responses, "text", r);
      property_get_invoke(b, "click");
    }
    each(responses, lambda7);
  }
  app_shared_button(root, name, lambda5);
}
