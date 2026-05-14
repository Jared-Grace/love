import { app_shared_initialize } from "../../../love/public/src/app_shared_initialize.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
export async function app_bible_main_generic_before(
  context,
  app_fn,
  screens,
  screen_home,
) {
  object_merge(context, {
    screen_home,
  });
  html_margin_0(root);
  await app_shared_initialize(context, app_fn, screens);
}
