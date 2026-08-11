import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_reply_main_shortcuts_languages_default_concat(
  right,
  languages_chosen_default,
) {
  arguments_assert(arguments, 2);
  let concated = list_concat(languages_chosen_default, right);
  return concated;
}
