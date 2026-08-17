import { arguments_assert } from "./arguments_assert.mjs";
import { g_greeting_v } from "./g_greeting_v.mjs";
import { property_get } from "./property_get.mjs";
export function g_greeting_sky_remark(r, time, christian) {
  arguments_assert(arguments, 3);
  let r3 = g_greeting_v(r, time, christian);
  let v = property_get(r3, "v");
  let meet_message = property_get(r3, "meet_message");
  let sky_remark = property_get(r3, "sky_remark");
  let r2 = {
    r3,
    v,
    meet_message,
    sky_remark,
  };
  return r2;
}
