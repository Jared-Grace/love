import { app_replace_button_style } from "../../../love/public/src/app_replace_button_style.mjs";
import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { html_button_screen } from "../../../love/public/src/html_button_screen.mjs";
export function app_replace_button_home(root, context) {
  let b = html_button_screen(
    root,
    emoji_home() + " Home",
    context,
    app_replace_home,
  );
  app_replace_button_style(b);
}
