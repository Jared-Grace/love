import { each } from "./each.mjs";
import { date_time_zone_future_is_assert_json } from "./date_time_zone_future_is_assert_json.mjs";
export function date_time_zone_future_is_assert_multiple(dts, zone) {
  function lambda(dt) {
    date_time_zone_future_is_assert_json(dt, zone, {
      hint: "each datetime should be in the future for this timezone",
    });
  }
  each(dts, lambda);
}
