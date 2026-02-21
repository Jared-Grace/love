import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { app_shared_name_prefix } from "../../../love/public/src/app_shared_name_prefix.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
export function app_prefix_without(app_fn) {
  let prefix = app_shared_name_prefix() + function_name_separator() + "";
  let without = text_prefix_without(app_fn.name, prefix);
  return without;
}
