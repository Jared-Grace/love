import { date_time_zone_future_is } from "./date_time_zone_future_is.mjs";
import { assert_message } from "./assert_message.mjs";
export function date_time_zone_future_is_assert(dt, zone) {
  let f = date_time_zone_future_is(dt, zone);
  assert_message(f, "not future");
}
