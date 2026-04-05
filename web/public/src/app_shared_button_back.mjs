import { app_shared_button_back_text } from "../../../love/public/src/app_shared_button_back_text.mjs";
import { app_shared_button_uncolored } from "../../../love/public/src/app_shared_button_uncolored.mjs";
export function app_shared_button_back(container, lambda) {
  let text = app_shared_button_back_text();
  let button = app_shared_button_uncolored(container, text, lambda);
  return button;
}
