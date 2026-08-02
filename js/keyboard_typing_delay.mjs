import { multiply_divide } from "./multiply_divide.mjs";
import { integer_random } from "./integer_random.mjs";
import { multiply } from "./multiply.mjs";
export function keyboard_typing_delay() {
  let characters_per_minute = 500;
  let seconds_per_minute = 60;
  let ms_per_second = 1000;
  let ms_per_character = multiply_divide(
    seconds_per_minute,
    ms_per_second,
    characters_per_minute,
  );
  let high = multiply(ms_per_character, 2);
  let delay_ms = integer_random(ms_per_character, high);
  return delay_ms;
}
