import { DateTime } from "luxon";
export function date_time_zone_from_iso(iso) {
  let dt = DateTime.fromISO(iso, {
    setZone: true,
  });
  return dt;
}
