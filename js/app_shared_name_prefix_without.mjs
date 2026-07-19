import { text_prefix_without } from "./text_prefix_without.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { app_shared_name_prefix } from "./app_shared_name_prefix.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_name_prefix_without(name) {
  let prefix = text_combine_multiple([
    app_shared_name_prefix(),
    function_name_separator(),
  ]);
  let without = text_prefix_without(name, prefix);
  return without;
}
