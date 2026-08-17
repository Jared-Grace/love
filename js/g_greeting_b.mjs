import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_time_sky_remark } from "./g_time_sky_remark.mjs";
import { null_is } from "./null_is.mjs";
export function g_greeting_b(r, time, christian) {
  arguments_assert(arguments, 3);
  let remark_maybe = property_get(r, "remark_maybe");
  let v = property_get(r, "v");
  let meet_message = property_get(r, "meet_message");
  ("RARE, one greeting in six, and only when the sky actually has something in it: a word about the sunset or the night overhead. rare on purpose — a sight is worth saying once, and an NPC who points at the same sunset every time you speak to them stops being someone who noticed it. ",
    fn_name("g_time_sky_remark"),
    " answers null at the three plain daylight hours, so this sentence simply does not exist at noon however the dice land. it brings its own question or exclamation mark, so no dot is added");
  let sky_remark = g_time_sky_remark(time, christian);
  let sky_maybe = "";
  let b = null_is(sky_remark);
  let r2 = {
    remark_maybe,
    v,
    meet_message,
    sky_remark,
    sky_maybe,
    b,
  };
  return r2;
}
