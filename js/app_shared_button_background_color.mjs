import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
export function app_shared_button_background_color() {
  "the default button IS the neutral fill — delegate to the one source so default, toggle-unchosen, and message buttons never drift apart";
  let c = app_shared_button_uncolored_background_color();
  return c;
}
