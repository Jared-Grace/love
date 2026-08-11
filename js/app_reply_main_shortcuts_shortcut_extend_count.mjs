import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_main_shortcuts_shortcut_extend } from "./app_reply_main_shortcuts_shortcut_extend.mjs";
import { property_set } from "./property_set.mjs";
export function app_reply_main_shortcuts_shortcut_extend_count(base, count) {
  arguments_assert(arguments, 2);
  let extended = app_reply_main_shortcuts_shortcut_extend(base, count);
  property_set(extended, "count", count);
  return extended;
}
