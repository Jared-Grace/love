import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
export function app_reply_languages_chosen_reset(
  languages_chosen,
  languages_chosen_default,
) {
  list_empty(languages_chosen);
  function lambda14(l) {
    list_add(languages_chosen, l);
  }
  each(languages_chosen_default, lambda14);
}
