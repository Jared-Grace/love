import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_shared_screen_set_fn } from "../../../love/public/src/app_shared_screen_set_fn.mjs";
export function app_shared_screen_set_button(context, s, bar, chapter_name) {
  let lambda4 = app_shared_screen_set_fn(context, s);
  let component2 = html_button(bar, chapter_name, lambda4);
}
