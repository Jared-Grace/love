import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_main_shortcuts_languages_default_concat } from "./app_reply_main_shortcuts_languages_default_concat.mjs";
export function app_reply_main_shortcuts_languages_default_concat_single(
  ke,
  languages_chosen_default,
) {
  arguments_assert(arguments, 2);
  let r = app_reply_main_shortcuts_languages_default_concat(
    [ke],
    languages_chosen_default,
  );
  return r;
}
