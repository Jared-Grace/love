import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_default } from "./app_shared_font_size_default.mjs";
import { app_shared_mobile_default_font_size_generic } from "./app_shared_mobile_default_font_size_generic.mjs";
export function app_shared_mobile_default_font_size(context) {
  "the page root every app screen starts from: the mobile defaults first, then the size this reader chose written over the top, so a size chosen once holds on every screen that prepares a root this way";
  "an app that was never told what to open at opens at the web's own size, and everything after that is the general one underneath, so a page whose readers arrive from somewhere else can start from that somewhere else without a second copy of any of this";
  arguments_assert(arguments, 1);
  let value_default = app_shared_font_size_default();
  let root = app_shared_mobile_default_font_size_generic(
    context,
    value_default,
  );
  return root;
}
