import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { app_shared_name_prefix } from "../../../love/public/src/app_shared_name_prefix.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_prefix_without(name) {
  let prefix = text_combine_multiple([
    app_shared_name_prefix(),
    function_name_separator(),
  ]);
  let without = text_prefix_without(name, prefix);
  return without;
}
