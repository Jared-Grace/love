import { app_code_screens } from "./app_code_screens.mjs";
import { html_margin_0_context_root } from "./html_margin_0_context_root.mjs";
import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_code_hash_restore } from "./app_code_hash_restore.mjs";
import { app_code_after_refresh } from "./app_code_after_refresh.mjs";
import { app_code_buttons_cap_style } from "./app_code_buttons_cap_style.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_code(context) {
  let app_fn = app_code;
  html_margin_0_context_root(context);
  let screens = app_code_screens();
  app_shared_initialize(context, app_fn, screens);
  app_code_buttons_cap_style();
  app_code_hash_restore(context);
  object_merge(context, {
    after_refresh: app_code_after_refresh,
  });
  await app_shared_refresh(context);
}
