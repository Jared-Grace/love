import { arguments_assert } from "./arguments_assert.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_font_size_generic } from "./app_shared_font_size_generic.mjs";
import { app_shared_font_size_refresh_generic } from "./app_shared_font_size_refresh_generic.mjs";
export function app_shared_mobile_default_font_size_generic(
  context,
  value_default,
) {
  "The page root an app screen starts from, given the size that app opens at before its reader has chosen one: the mobile defaults first, then this reader's own chosen size written over the top.";
  "The size a reader never chose is asked for rather than fixed here, because an app whose readers arrive from another app is honestly opening at that other app's size and not at the size of a page nobody has ever been to. Once they change it here it is theirs and this app's alone - the starting size is a starting point and is never read again.";
  arguments_assert(arguments, 2);
  let root = html_mobile_default(context);
  let value = app_shared_font_size_generic(context, value_default);
  app_shared_font_size_refresh_generic(context, value);
  return root;
}
