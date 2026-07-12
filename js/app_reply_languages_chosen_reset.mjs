import { list_find_json } from "./list_find_json.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty } from "./list_empty.mjs";
export function app_reply_languages_chosen_reset(
  languages_chosen,
  languages_chosen_default,
  languages,
) {
  list_empty(languages_chosen);
  function lambda(l) {
    let found = list_find_json(languages, l);
    list_add(languages_chosen, found);
  }
  each(languages_chosen_default, lambda);
}
