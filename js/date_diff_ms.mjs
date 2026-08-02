import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
export function date_diff_ms(now, before) {
  let difference = subtract(now, before);
  let v = abs(difference);
  return v;
}
