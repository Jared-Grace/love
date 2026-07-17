import { app_shared_button_home_text } from "../../love/js/app_shared_button_home_text.mjs";
import { app_replace_home } from "../../love/js/app_replace_home.mjs";
import { app_shared_screen_set_button } from "../../love/js/app_shared_screen_set_button.mjs";
export function app_replace_button_home(root, context) {
  let text = app_shared_button_home_text();
  let b = app_shared_screen_set_button(root, context, app_replace_home, text);
}
