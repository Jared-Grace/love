import { integer_even_is } from "./integer_even_is.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
export function week_calendar_color_empty(slot) {
  "the background colour of an unselected 30-minute piece: alternating light bands per hour (plain white, then a faint grey) so it is easy to tell one hour from the next";
  let hour = divide_floor(slot, 2);
  let even_hour = integer_even_is(hour);
  let c = even_hour ? "#ffffff" : app_shared_color_gray_light();
  return c;
}
