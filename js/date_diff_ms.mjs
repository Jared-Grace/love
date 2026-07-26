import { subtract } from "./subtract.mjs";
export function date_diff_ms(now, before) {
  let difference = subtract(now, before);
  let v = Math.abs(difference);
  return v;
}
