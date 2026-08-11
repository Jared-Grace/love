import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_results_buttons_expand } from "./app_search_results_buttons_expand.mjs";
import { list_squash } from "./list_squash.mjs";
export async function app_search_results_collect_all_texts(button_list) {
  arguments_assert(arguments, 1);
  let waited = await app_search_results_buttons_expand(button_list);
  let squashed = list_squash(waited);
  return squashed;
}
