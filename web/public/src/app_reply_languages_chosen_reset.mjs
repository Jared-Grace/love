import { marker } from "../../../love/public/src/marker.mjs";
import { list_find_json } from "../../../love/public/src/list_find_json.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
export function app_reply_languages_chosen_reset(
  languages_chosen,
  languages_chosen_default,
  languages,
) {
  marker("1");
  list_empty(languages_chosen);
  function lambda14(l) {
    let found = list_find_json(list, expected);
    list_add(languages_chosen, l);
  }
  each(languages_chosen_default, lambda14);
}
