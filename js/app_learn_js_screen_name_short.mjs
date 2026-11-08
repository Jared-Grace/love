import { fn_name } from "./fn_name.mjs";
import { app_shared_screen_name_short } from "./app_shared_screen_name_short.mjs";
export function app_learn_js_screen_name_short(screen_name) {
  "A screen's name as a link writes it: the app's own name taken off the front, because the page the link opens already says which app it is.";
  "A name already short is handed back as it is, so this can be asked of either spelling.";
  let short = app_shared_screen_name_short(
    fn_name("app_learn_js"),
    screen_name,
  );
  return short;
}
