import { arguments_assert } from "./arguments_assert.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_bible_font_size } from "./app_shared_bible_font_size.mjs";
import { app_shared_font_size_refresh_generic } from "./app_shared_font_size_refresh_generic.mjs";
export function app_shared_mobile_default_bible_font_size(context) {
  "The page root a bible page starts from: the mobile defaults first, then the size this reader chose in the bible reader written over the top.";
  "The twin beside this one writes the size the page's own app was left at, and that is right for a page a reader arrives at and settles into, because the way they change it is on that page. This is for a page they were sent - it shows scripture, it offers the reader as the way onward, and it has no way to change a size of its own, so the only size it could honestly open at is the one they already chose next door.";
  arguments_assert(arguments, 1);
  let root = html_mobile_default(context);
  let value = app_shared_bible_font_size();
  app_shared_font_size_refresh_generic(context, value);
  return root;
}
