import { app_shared_style_control_inline } from "./app_shared_style_control_inline.mjs";
import { app_shared_button_uncolored_style_assign } from "./app_shared_button_uncolored_style_assign.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_button } from "./html_button.mjs";
export function app_shared_button_inline(div, text, lambda) {
  arguments_assert(arguments, 3);
  let component = html_button(div, text, lambda);
  app_shared_style_control_inline(component);
  app_shared_button_uncolored_style_assign(component);
  return component;
}
