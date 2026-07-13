import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
export function app_a_button(parent, text, lambda) {
  let b = app_shared_button_inline(parent, text, lambda);
  return b;
}
