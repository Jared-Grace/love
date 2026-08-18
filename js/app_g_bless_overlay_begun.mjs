import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_overlay_tapped } from "./app_g_bless_overlay_tapped.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_overlay_transfer } from "./app_g_bless_overlay_transfer.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_overlay_begun(r, container_map) {
  arguments_assert(arguments, 2);
  let r2 = app_g_bless_overlay_tapped(r);
  let tapped = property_get(r2, "tapped");
  let transfer = app_g_bless_overlay_transfer(r2, tapped, container_map);
  function begun() {
    html_remove(transfer);
  }
  let r3 = {
    transfer,
    begun,
  };
  return r3;
}
