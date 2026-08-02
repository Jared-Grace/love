import { numbers_apart } from "./numbers_apart.mjs";
export function date_diff_ms(now, before) {
  "How many milliseconds lie between two times, whichever of them is the later.";
  let v = numbers_apart(now, before);
  return v;
}
