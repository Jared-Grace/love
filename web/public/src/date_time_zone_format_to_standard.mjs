import { date_time_zone_format } from "../../../love/public/src/date_time_zone_format.mjs";
export function date_time_zone_format_to_standard(dt) {
  let format = date_time_zone_format();
  let formatted = dt.toFormat(format);
  return formatted;
}
