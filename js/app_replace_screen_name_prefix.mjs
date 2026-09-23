import { fn_name } from "./fn_name.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_screen_name_prefix() {
  "The front every replace app screen's name shares - the app's own name and the separator after it. A link writes the screen without it, because the page the link opens already says which app it is.";
  let app = fn_name("app_replace");
  let separator = function_name_separator();
  let prefix = text_combine(app, separator);
  return prefix;
}
