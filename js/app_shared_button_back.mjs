import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_shared_button_back(container, lambda) {
  "The way out of a screen is dressed exactly as every other button in these apps is dressed, size included. It used to be written at the size of the words around it instead, which left the one button a reader reaches for most as the only small one on the screen.";
  "Nothing is taken off the shared dressing here, and nothing is added to it either - the twins simply wear it whole, which is what keeps them in step with the buttons beside them.";
  let text = app_shared_button_back_text();
  let button = app_shared_button_uncolored(container, text, lambda);
  return button;
}
