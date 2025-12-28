import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_toggle(languages_chosen, language) {
  let includes2 = list_includes(languages_chosen, language);
  if (includes2) {
    list_remove(languages_chosen, language);
  } else {
    list_add(languages_chosen, language);
  }
}
