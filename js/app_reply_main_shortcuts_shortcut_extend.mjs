import { arguments_assert } from "./arguments_assert.mjs";
import { json_copy } from "./json_copy.mjs";
import { property_combine } from "./property_combine.mjs";
export function app_reply_main_shortcuts_shortcut_extend(base, name_suffix) {
  arguments_assert(arguments, 2);
  let extended = json_copy(base);
  property_combine(extended, "name", name_suffix);
  return extended;
}
