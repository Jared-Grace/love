import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { app_replace_button_screen } from "./app_replace_button_screen.mjs";
export function app_replace_button_home(root, context) {
  let b = app_replace_button_screen(
    context,
    app_replace_home,
    root,
    emoji_home() + " Home",
  );
}
