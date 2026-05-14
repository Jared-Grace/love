import { app_shared_initialize } from "../../../love/public/src/app_shared_initialize.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_bible_shared_initialize_before(
  context,
  app_fn,
  screens,
  screen_home,
) {
  object_merge(context, {
    screen_home,
  });
  html_margin_0(root);
  app_shared_initialize(context, app_fn, screens);
}
