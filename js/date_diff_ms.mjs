import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
export function date_diff_ms(now, before) {
  let v = Math.abs(subtract(now, before));
  return v;
}
