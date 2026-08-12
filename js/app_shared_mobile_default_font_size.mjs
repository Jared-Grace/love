import { app_shared_font_size_refresh } from "./app_shared_font_size_refresh.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
export function app_shared_mobile_default_font_size(context) {
  "the page root every app screen starts from: the mobile defaults first, then the size this reader chose written over the top, so a size chosen once holds on every screen that prepares a root this way";
  let root = html_mobile_default(context);
  app_shared_font_size_refresh(context);
  return root;
}
