import { app_replace_button } from "./app_replace_button.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
export function app_replace_button_back(parent, lambda) {
  let text = app_shared_button_back_text();
  let component = app_replace_button(parent, text, lambda);
  return component;
}
