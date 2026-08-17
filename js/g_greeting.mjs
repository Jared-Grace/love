import { property_get } from "./property_get.mjs";
import { g_greeting_sky_remark } from "./g_greeting_sky_remark.mjs";
import { g_greeting_npc_says } from "./g_greeting_npc_says.mjs";
import { g_greeting_remark_maybe } from "./g_greeting_remark_maybe.mjs";
export function g_greeting(met, name_player, time, christian) {
  let r = g_greeting_remark_maybe(time, christian, met);
  let r2 = g_greeting_sky_remark(r, time, christian);
  let sky_remark = property_get(r2, "sky_remark");
  let meet_message = property_get(r2, "meet_message");
  let v = property_get(r2, "v");
  let r3 = property_get(r2, "r3");
  let npc_says = g_greeting_npc_says(
    r3,
    sky_remark,
    v,
    name_player,
    meet_message,
  );
  return npc_says;
}
