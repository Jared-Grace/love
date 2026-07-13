import { date_time_zone_future_is } from "./date_time_zone_future_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function date_time_zone_future_is_assert_json(dt, zone, json) {
  let f = date_time_zone_future_is(dt, zone);
  assert_json(f, {
    dt,
    zone,
    json,
  });
}
