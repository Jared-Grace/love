import { date_ms_to_hours } from "./date_ms_to_hours.mjs";
import { date_diff_ms } from "./date_diff_ms.mjs";
export function date_diff_hours(now, before) {
  let ms = date_diff_ms(now, before);
  const hours = date_ms_to_hours(ms);
  return hours;
}
