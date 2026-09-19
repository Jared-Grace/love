import { app_code_screen_name_prefix } from "./app_code_screen_name_prefix.mjs";
import { text_prefix_without_try } from "./text_prefix_without_try.mjs";
export function app_code_screen_name_short(screen_name) {
  "A screen's name as a link writes it: the app's own name taken off the front, because the page the link opens already says which app it is.";
  "A name already short is handed back as it is, so this can be asked of either spelling.";
  let prefix = app_code_screen_name_prefix();
  let short = text_prefix_without_try(screen_name, prefix);
  return short;
}
