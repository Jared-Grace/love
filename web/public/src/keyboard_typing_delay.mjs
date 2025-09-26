import { integer_random } from "./integer_random.mjs";
export function keyboard_typing_delay() {
  let characters_per_minute = 190;
  let seconds_per_minute = 60;
  let ms_per_second = 1000;
  let ms_per_minute = seconds_per_minute * ms_per_second;
  let ms_per_character = ms_per_minute / characters_per_minute;
  let high = ms_per_character * 1.5;
  let delay = integer_random(ms_per_character, high);
  return delay;
}
