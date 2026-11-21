import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_learn_js_hash_unknown_page_shown_is } from "./app_learn_js_hash_unknown_page_shown_is.mjs";
import { html_margin_0_context_root } from "./html_margin_0_context_root.mjs";
import { app_learn_js_screens } from "./app_learn_js_screens.mjs";
import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { app_learn_js_buttons_cap_style } from "./app_learn_js_buttons_cap_style.mjs";
import { app_shared_hash_restore_set } from "./app_shared_hash_restore_set.mjs";
import { app_learn_js_hash_restore } from "./app_learn_js_hash_restore.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_learn_js_after_refresh } from "./app_learn_js_after_refresh.mjs";
import { app_learn_js_hash_complete_latest_restore } from "./app_learn_js_hash_complete_latest_restore.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
export async function app_learn_js(context) {
  "A CHANGED ADDRESS OPENS WHAT IT NAMES, found by the human 2026-11-21: editing the lesson after the # in the bar left the page on the old lesson, because the browser does not load a page again for a change after the # and this page reads its address only as it opens. So the page loads itself again, and reads the new one. Listened for before anything else, so an address naming a lesson that does not exist can still be corrected in the bar. The page's own moves write the address without telling the browser, so they never set this off.";
  html_reload_on_hash_change();
  let hash = html_hash_object_get();
  ("the link is read back to the reader before any of it is believed, so a lesson or a screen that does not exist is answered rather than written into this tab's memory on the way to a page that opens somewhere nobody asked for");
  let unknown_shown = app_learn_js_hash_unknown_page_shown_is(context, hash);
  if (unknown_shown) {
    return;
  }
  let app_fn = app_learn_js;
  html_margin_0_context_root(context);
  let screens = app_learn_js_screens();
  app_shared_initialize(context, app_fn, screens);
  app_learn_js_buttons_cap_style();
  app_shared_hash_restore_set(context, app_learn_js_hash_restore);
  object_merge(context, {
    after_refresh: app_learn_js_after_refresh,
  });
  await app_learn_js_hash_complete_latest_restore(context, hash);
  await app_shared_refresh(context);
}
