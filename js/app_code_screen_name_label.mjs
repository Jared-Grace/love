import { fn_name } from "./fn_name.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
export function app_code_screen_name_label(screen_name) {
  "How a screen is worded on a button offering it to a reader whose link named a screen that does not exist.";
  "The app's own name is taken off the front of it. A reader looking at one app's page already knows which app they are on, and reading it back to them in front of every choice leaves the one word that differs sitting at the end of five near-identical buttons.";
  let app = fn_name("app_code");
  let separator = function_name_separator();
  let prefix = text_combine(app, separator);
  let said = text_prefix_without(screen_name, prefix);
  return said;
}
