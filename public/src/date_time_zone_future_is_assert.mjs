import { assert } from "../../../love/public/src/assert.mjs";
import { date_time_zone_future_is } from "../../../love/public/src/date_time_zone_future_is.mjs";
export function date_time_zone_future_is_assert(dt, zone) {
  let f = date_time_zone_future_is(dt, zone);
  assert(f);
}
