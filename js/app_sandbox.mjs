import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_sandbox_choose } from "./app_sandbox_choose.mjs";
import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
export async function app_sandbox(context) {
  "The sandbox page itself: clear whatever was on screen, then run the one preview the address names, or offer the list of previews when it names none.";
  let root = property_get(context, "root");
  html_reload_on_hash_change();
  html_clear(root);
  html_mobile_default(context);
  let name = html_hash_name_get();
  app_sandbox_choose(root, name);
}
