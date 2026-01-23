import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { app_a_button_function_text_selected } from "../../../love/public/src/app_a_button_function_text_selected.mjs";
export function app_a_button_function(context, root, lambda2) {
  const text = app_a_button_function_text_selected(context);
  let b = app_a_button(root, text, lambda2);
  return b;
}
