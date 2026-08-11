import { object_merge_match } from "./object_merge_match.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
export function app_shared_bible_initialize_before(
  context,
  app_fn,
  screens,
  screen_home,
) {
  "The home screen is the same function every time this app initializes, so writing it again is agreement rather than a clash - and this runs again every time the reader is swapped over in place. Refusing an existing one threw here, leaving the whole chapter on screen while the url said a single verse.";
  object_merge_match(context, {
    screen_home,
  });
  let root = property_get(context, "root");
  html_margin_0(root);
  app_shared_initialize(context, app_fn, screens);
}
