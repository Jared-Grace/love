import { app_shared_initialize_refresh } from "./app_shared_initialize_refresh.mjs";
import { html_margin_0_context_root } from "./html_margin_0_context_root.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_a_file_system_initialize } from "./app_a_file_system_initialize.mjs";
import { html_on_keydown } from "./html_on_keydown.mjs";
import { invoke_multiple_arg } from "./invoke_multiple_arg.mjs";
import { app_a_screens } from "./app_a_screens.mjs";
export async function app_a(context) {
  await app_a_file_system_initialize();
  let app_fn = app_a;
  let on_keydowns = [];
  object_merge(context, {
    on_keydowns,
  });
  let screens = app_a_screens();
  let root = html_margin_0_context_root(context);
  function lambda(e) {
    invoke_multiple_arg(on_keydowns, e);
  }
  html_on_keydown(root, lambda);
  await app_shared_initialize_refresh(context, app_fn, screens);
}
