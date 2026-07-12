import { each } from "./each.mjs";
import { date_time_zone_future_is_assert } from "./date_time_zone_future_is_assert.mjs";
export function date_time_zone_future_is_assert_multiple(dts, zone) {
  function lambda(dt) {
    date_time_zone_future_is_assert(dt, zone);
  }
  each(dts, lambda);
}
