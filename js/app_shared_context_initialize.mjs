import { fn_name } from "./fn_name.mjs";
import { app_shared_context_initialize_root } from "./app_shared_context_initialize_root.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_shared_boot_safe } from "./app_shared_boot_safe.mjs";
import { html_loading_splash_take } from "./html_loading_splash_take.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_size_adjust_lock } from "./html_text_size_adjust_lock.mjs";
export async function app_shared_context_initialize(fn) {
  ("boot every app through the corruption net: the happy path renders exactly once, unchanged; if a read hits CORRUPT storage the net quarantines that key and retries, clearing the root first so a partial first render never doubles the DOM. lock the browser's text-inflation to 100% here, at the one boot EVERY app shares, so mobile Firefox never enlarges the type past the authored size — universal, unlike ",
    fn_name("html_mobile_default"),
    " which several apps (message, autopray, next, examples, designs_universal, calendar_paste) never call");
  html_text_size_adjust_lock();
  let root = html_document_body();
  let attempted = false;
  let render = async function app_boot_render() {
    if (attempted) {
      html_clear(root);
    }
    attempted = true;
    let r = await app_shared_context_initialize_root(root, fn);
    return r;
  };
  await app_shared_boot_safe(render);
  html_loading_splash_take();
}
