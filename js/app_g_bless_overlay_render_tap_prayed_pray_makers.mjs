import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_id_pray } from "./app_g_bless_overlay_render_tap_prayed_person_id_pray.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_at } from "./app_g_bless_overlay_render_tap_prayed_person_at.mjs";
import { not } from "./not.mjs";
import { app_g_bless_overlay_render_tap_prayed_amen_ask } from "./app_g_bless_overlay_render_tap_prayed_amen_ask.mjs";
export function app_g_bless_overlay_render_tap_prayed_pray_makers(
  view_everyone,
  person_pray,
  view_now,
  container_map,
  rung,
) {
  arguments_assert(arguments, 5);
  function pray_person_id(id) {
    let r4 = app_g_bless_overlay_render_tap_prayed_person_id_pray(
      id,
      view_everyone,
      person_pray,
    );
    return r4;
  }
  function tap_prayed(target) {
    "Whether the tap landed on somebody, and so became a prayer instead of a walk.";
    let person = app_g_bless_overlay_render_tap_prayed_person_at(
      target,
      view_now,
    );
    if (not(person)) {
      return false;
    }
    function amen() {
      person_pray(person);
    }
    app_g_bless_overlay_render_tap_prayed_amen_ask(container_map, rung, amen);
    return true;
  }
  let r = {
    pray_person_id,
    tap_prayed,
  };
  return r;
}
