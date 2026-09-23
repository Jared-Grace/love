import { function_name_separator } from "./function_name_separator.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_screen_name_prefix(app_name) {
  "The front every screen's name in an app shares - the app's own name and the separator after it.";
  let separator = function_name_separator();
  let prefix = text_combine(app_name, separator);
  return prefix;
}
