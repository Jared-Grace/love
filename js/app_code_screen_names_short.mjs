import { app_code_screen_names } from "./app_code_screen_names.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_screen_name_short } from "./app_code_screen_name_short.mjs";
export function app_code_screen_names_short() {
  "The name of each screen of the code app as a link writes it.";
  let names = app_code_screen_names();
  let shorts = list_map(names, app_code_screen_name_short);
  return shorts;
}
