import { html_clear_context } from "./html_clear_context.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
export function app_shared_bible_screen_open(context, back) {
  "start a bible settings screen: clear to a fresh centered, padded root, then lead with the back button that leaves it; returns the root for the caller to fill";
  let root = html_clear_context(context);
  html_centered(root);
  html_page_padding_x(root);
  app_shared_button_back(root, back);
  return root;
}
