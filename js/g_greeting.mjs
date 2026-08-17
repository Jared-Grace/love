import { property_get } from "./property_get.mjs";
import { g_greeting_b } from "./g_greeting_b.mjs";
import { g_greeting_remark_maybe } from "./g_greeting_remark_maybe.mjs";
import { boolean_random_n } from "./boolean_random_n.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_greeting(met, name_player, time, christian) {
  let r = g_greeting_remark_maybe(time, christian, met);
  let r2 = g_greeting_b(r, time, christian);
  let b = property_get(r2, "b");
  let sky_maybe = property_get(r2, "sky_maybe");
  let sky_remark = property_get(r2, "sky_remark");
  let meet_message = property_get(r2, "meet_message");
  let v = property_get(r2, "v");
  let remark_maybe = property_get(r2, "remark_maybe");
  if (not(b)) {
    let rare = boolean_random_n(6);
    if (rare) {
      sky_maybe = text_combine(" ", sky_remark);
    }
  }
  let r10 = g_random_dot_bang();
  let npc_says = text_combine_multiple([
    v,
    " ",
    name_player,
    r10,
    remark_maybe,
    sky_maybe,
    meet_message,
  ]);
  return npc_says;
}
