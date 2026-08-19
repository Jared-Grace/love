import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { boolean_random_n } from "./boolean_random_n.mjs";
import { text_combine } from "./text_combine.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_greeting_npc_says(
  r,
  sky_remark,
  v,
  name_player,
  meet_message,
) {
  arguments_assert(arguments, 5);
  let sky_maybe = property_get(r, "sky_maybe");
  let b = property_get(r, "b");
  let remark_maybe = property_path_get_2(r, "r2", "remark_maybe");
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
