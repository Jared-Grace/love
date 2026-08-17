import { g_greeting_npc_says } from "./g_greeting_npc_says.mjs";
import { g_greeting_v } from "./g_greeting_v.mjs";
import { property_get } from "./property_get.mjs";
import { g_greeting_remark_maybe } from "./g_greeting_remark_maybe.mjs";
export function g_greeting(met, name_player, time, christian) {
  let r = g_greeting_remark_maybe(time, christian, met);
  let r3 = g_greeting_v(r, time, christian);
  let v = property_get(r3, "v");
  let meet_message = property_get(r3, "meet_message");
  let sky_remark = property_get(r3, "sky_remark");
  let npc_says = g_greeting_npc_says(
    r3,
    sky_remark,
    v,
    name_player,
    meet_message,
  );
  return npc_says;
}
