import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_main_shortcuts_shortcut_extend } from "./app_reply_main_shortcuts_shortcut_extend.mjs";
import { property_get_add } from "./property_get_add.mjs";
export function app_reply_main_shortcuts_shortcut_extend_response(
  base,
  name_suffix,
  r,
) {
  arguments_assert(arguments, 3);
  let extended = app_reply_main_shortcuts_shortcut_extend(base, name_suffix);
  property_get_add(extended, "responses", r);
  return extended;
}
