import { app_replace_button_home_text } from "../../../love/public/src/app_replace_button_home_text.mjs";
import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
import { app_replace_button_screen } from "../../../love/public/src/app_replace_button_screen.mjs";
export function app_replace_button_home(root, context) {
  let text = app_replace_button_home_text();
  let b = app_replace_button_screen(context, app_replace_home, root, text);
}
