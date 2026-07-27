import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
export function week_calendar_color_empty(slot) {
  "the background colour of an unselected 30-minute piece: alternating light bands per hour (plain white, then a faint grey) so it is easy to tell one hour from the next";
  let divided = divide(slot, 2);
  let hour = Math.floor(divided);
  let left = modulo(hour, 2);
  let even_hour = equal(left, 0);
  let c = even_hour ? "#ffffff" : app_shared_color_gray_light();
  return c;
}
