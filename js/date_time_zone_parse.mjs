import { DateTime } from "luxon";
export function date_time_zone_parse(input, format, zone) {
  let dt = DateTime.fromFormat(input, format, {
    zone,
  });
  return dt;
}
