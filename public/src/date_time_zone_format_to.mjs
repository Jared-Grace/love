import { date_time_zone_format } from "../../../love/public/src/date_time_zone_format.mjs";
export function date_time_zone_format_to(pakistan) {
  let format = date_time_zone_format();
  let v2 = pakistan.toFormat(format);
  return v2;
}
