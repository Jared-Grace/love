import { fn_name } from "./fn_name.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_screen_name_prefix() {
  "The front every code app screen's name shares - the app's own name and the separator after it.";
  let app = fn_name("app_code");
  let prefix = app_shared_screen_name_prefix(app);
  return prefix;
}
