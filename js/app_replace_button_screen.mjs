import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_shared_screen_set } from "../../love/js/app_shared_screen_set.mjs";
export function app_replace_button_screen(context, screen_fn, parent, text) {
  async function lambda() {
    await app_shared_screen_set(context, screen_fn);
  }
  let b = app_shared_button(parent, text, lambda);
  return b;
}
