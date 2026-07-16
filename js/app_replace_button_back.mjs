import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { app_shared_button_back_text } from "../../love/js/app_shared_button_back_text.mjs";
export function app_replace_button_back(parent, lambda) {
  let text = app_shared_button_back_text();
  let component = app_shared_button_wide(parent, text, lambda);
  return component;
}
