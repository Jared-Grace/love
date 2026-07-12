import { integer_random } from "./integer_random.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function keyboard_typing_delay() {
  let characters_per_minute = 500;
  let seconds_per_minute = 60;
  let ms_per_second = 1000;
  let ms_per_minute = multiply(seconds_per_minute, ms_per_second);
  let ms_per_character = divide(ms_per_minute, characters_per_minute);
  let high = multiply(ms_per_character, 2);
  let delay_ms = integer_random(ms_per_character, high);
  return delay_ms;
}
