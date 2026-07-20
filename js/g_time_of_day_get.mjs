import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function g_time_of_day_get(g) {
  "the current time of day from the game save, defaulting to morning (older saves predate the field)";
  let time = "morning";
  if (property_exists(g, "time_of_day")) {
    time = property_get(g, "time_of_day");
  }
  return time;
}
