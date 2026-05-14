import { html_margin_0_context_root } from "../../../love/public/src/html_margin_0_context_root.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { invoke_multiple_arg } from "../../../love/public/src/invoke_multiple_arg.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { app_a_screens } from "../../../love/public/src/app_a_screens.mjs";
import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
export async function app_a_main(context) {
  await app_a_file_system_initialize();
  let app_fn = app_a;
  let screens = app_a_screens();
  let on_keydowns = [];
  object_merge(context, {
    on_keydowns,
  });
  let root = html_margin_0_context_root(context);
  function lambda(e) {
    invoke_multiple_arg(on_keydowns, e);
  }
  html_on_keydown(root, lambda);
  html_font_sans_serif_set_html();
  object_merge(context, {
    app_fn,
    screens,
  });
  await app_shared_refresh(context);
}
