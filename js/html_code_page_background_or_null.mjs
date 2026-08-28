import { arguments_assert } from "./arguments_assert.mjs";
import { apps_page_dark_is } from "./apps_page_dark_is.mjs";
import { not } from "./not.mjs";
import { app_shared_color_page_dark } from "./app_shared_color_page_dark.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_page_background_or_null(name) {
  "$plain name";
  arguments_assert(arguments, 1);
  ("The colour to paint an app's page before any of it has arrived, written as a style for");
  ("the page element itself - or nothing at all, for an app that is happy on the browser's");
  ("own white.");
  ("It goes on the PAGE element rather than into a stylesheet in the head, because the head");
  ("is rebuilt from scratch whenever the HTML is regenerated and a tag added there is a tag");
  ("that quietly stops being written. It is also the earliest thing on the page there is,");
  ("which is the whole point: a colour the browser has before it has read anything else.");
  let dark_is = apps_page_dark_is(name);
  if (not(dark_is)) {
    return null;
  }
  let dark = app_shared_color_page_dark();
  let r = text_combine_multiple(["background:", dark]);
  return r;
}
