import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { date_zone_date_time } from "./date_zone_date_time.mjs";
export function date_zone_moment(date, time, zone) {
  "$plain date";
  "$plain time";
  "$plain zone";
  ("The moment a wall clock in a named zone reads a date 'YYYY-MM-DD' and time 'HH:MM' - the other way round from ",
    fn_name("date_zone_date_time"),
    ".");
  ("It first reads the numbers as if the zone were Greenwich, asks what the zone's clock says at that moment, and moves by the difference. Moving can cross a change of summer time, so it asks once more from where it landed; two steps settle it for every zone.");
  arguments_assert(arguments, 3);
  let [year, month, day] = date.split("-").map(Number);
  let [hour, minute] = time.split(":").map(Number);
  let difference = subtract(month, 1);
  let wanted = Date.UTC(year, difference, day, hour, minute);
  function wall_ms(moment) {
    let wall = date_zone_date_time(new Date(moment), zone);
    let [y, mo, dd] = wall.date.split("-").map(Number);
    let [h, mi] = wall.time.split(":").map(Number);
    let difference2 = subtract(mo, 1);
    let r = Date.UTC(y, difference2, dd, h, mi);
    return r;
  }
  let left = wall_ms(wanted);
  let right = subtract(left, wanted);
  let moment = subtract(wanted, right);
  let left2 = wall_ms(moment);
  let right2 = subtract(left2, wanted);
  moment = subtract(moment, right2);
  let r2 = new Date(moment);
  return r2;
}
