import { arguments_assert } from "./arguments_assert.mjs";
import { g_greeting_b } from "./g_greeting_b.mjs";
import { property_get } from "./property_get.mjs";
export function g_greeting_v(r, time, christian) {
  arguments_assert(arguments, 3);
  let r2 = g_greeting_b(r, time, christian);
  let b = property_get(r2, "b");
  let sky_maybe = property_get(r2, "sky_maybe");
  let sky_remark = property_get(r2, "sky_remark");
  let meet_message = property_get(r2, "meet_message");
  let v = property_get(r2, "v");
  let r3 = {
    r2,
    b,
    sky_maybe,
    sky_remark,
    meet_message,
    v,
  };
  return r3;
}
