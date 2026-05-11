import { each } from "../../../love/public/src/each.mjs";
import { date_time_zone_future_is_assert } from "../../../love/public/src/date_time_zone_future_is_assert.mjs";
export function date_time_zone_future_is_assert_multiple(zone, dts) {
  function lambda(dt) {
    date_time_zone_future_is_assert(dt, zone);
  }
  each(dts, lambda);
}
