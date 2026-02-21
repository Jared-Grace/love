import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
export function app_replace_button_screen(context, screen_fn, parent, text) {
  function lambda2() {
    app_shared_screen_set(context, screen_fn);
  }
  let b2 = app_replace_button(parent, text, lambda2);
}
