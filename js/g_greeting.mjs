import { property_get } from "./property_get.mjs";
import { g_greeting_remark_maybe } from "./g_greeting_remark_maybe.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_time_sky_remark } from "./g_time_sky_remark.mjs";
import { null_is } from "./null_is.mjs";
import { boolean_random_n } from "./boolean_random_n.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_greeting(met, name_player, time, christian) {
  let r = g_greeting_remark_maybe(time, christian, met);
  let remark_maybe = property_get(r, "remark_maybe");
  let v = property_get(r, "v");
  let meet_message = property_get(r, "meet_message");
  ("RARE, one greeting in six, and only when the sky actually has something in it: a word about the sunset or the night overhead. rare on purpose — a sight is worth saying once, and an NPC who points at the same sunset every time you speak to them stops being someone who noticed it. ",
    fn_name("g_time_sky_remark"),
    " answers null at the three plain daylight hours, so this sentence simply does not exist at noon however the dice land. it brings its own question or exclamation mark, so no dot is added");
  let sky_remark = g_time_sky_remark(time, christian);
  let sky_maybe = "";
  let b = null_is(sky_remark);
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
