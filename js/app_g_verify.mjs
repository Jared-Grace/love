import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_g_verify_screens } from "./app_g_verify_screens.mjs";
import { app_g_verify_home } from "./app_g_verify_home.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
export async function app_g_verify(context) {
  let app_fn = app_g_verify;
  let screens = app_g_verify_screens();
  object_merge(context, {
    screen_home: app_g_verify_home,
  });
  let root = property_get(context, "root");
  html_margin_0(root);
  app_shared_initialize(context, app_fn, screens);
  await app_shared_refresh(context);
}
