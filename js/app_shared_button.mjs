import { app_shared_button_notext } from "./app_shared_button_notext.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_shared_button(parent, text, lambda) {
  let b = app_shared_button_notext(parent, lambda);
  html_text_set(b, text);
  return b;
}
