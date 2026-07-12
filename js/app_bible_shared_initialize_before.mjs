import { property_get } from "./property_get.mjs";
import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_bible_shared_initialize_before(
  context,
  app_fn,
  screens,
  screen_home,
) {
  object_merge(context, {
    screen_home,
  });
  let root = property_get(context, "root");
  html_margin_0(root);
  app_shared_initialize(context, app_fn, screens);
}
