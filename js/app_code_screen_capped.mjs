import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_code_content_cap } from "./app_code_content_cap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
export function app_code_screen_capped(context) {
  "the empty screen this app's plain screens start from: cleared, padded at the sides, and capped to the same column the lessons are listed in, so what is written on it reads at the width everything else on this app is read at rather than running the full width of a desktop window";
  arguments_assert(arguments, 1);
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  app_code_content_cap(g);
  return g;
}
