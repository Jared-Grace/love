import { abs } from "../../../love/public/src/abs.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function date_diff_ms(now, before) {
  let v = Math.abs(subtract(now, before));
  return v;
}
